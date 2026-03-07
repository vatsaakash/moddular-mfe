'use client';

import { useState, useEffect } from 'react';
import { ProfileStats, SocialPlatform } from './types';

export interface ProfileData {
  name?: string;
  username?: string;
  bio?: string;
  image?: string;
  stats?: ProfileStats;
  platform?: SocialPlatform;
}

export function useProfileData(profileUrl?: string) {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profileUrl) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = new URL(profileUrl);
        const host = url.hostname.toLowerCase();
        let fetchedData: ProfileData = {};

        if (host.includes('github.com')) {
          const username = url.pathname.split('/').filter(Boolean)[0];
          const response = await fetch(`https://api.github.com/users/${username}`);
          if (response.ok) {
            const githubData = await response.json();
            fetchedData = {
              name: githubData.name || githubData.login,
              username: githubData.login,
              bio: githubData.bio,
              image: githubData.avatar_url,
              stats: {
                followers: githubData.followers,
                following: githubData.following,
                posts: githubData.public_repos,
              },
              platform: 'github',
            };
          }
        } else {
          // Use Microlink for other platforms (Instagram, LinkedIn, X, etc.)
          // Adding prerender=true helps bypass some client-side login redirects
          const fetchUrl = `https://api.microlink.io?url=${encodeURIComponent(profileUrl)}&prerender=true`;
          const response = await fetch(fetchUrl);
          
          if (response.ok) {
            const mlData = await response.json();
            const meta = mlData.data;
            
            // Detect if we hit a login wall
            const isLoginWall = meta.title?.toLowerCase().includes('login') || 
                               meta.title?.toLowerCase().includes('sign up') ||
                               meta.title?.toLowerCase().includes('redirecting');

            if (isLoginWall) {
              const username = url.pathname.split('/').filter(Boolean).pop() || '';
              fetchedData = {
                name: username.charAt(0).toUpperCase() + username.slice(1),
                username: username,
                platform: getPlatformFromHost(host),
                bio: 'Profile data restricted by platform. Visit link for more info.',
              };
            } else {
              let cleanName = meta.title || meta.author || '';
              // Remove common social media suffixes
              cleanName = cleanName
                .replace(' | LinkedIn', '')
                .replace(' - Instagram photos and videos', '')
                .replace(' (@', ' (') // Just in case
                .split(' (')[0] // Remove the (@username) part often in titles
                .split(' • ')[0]; // Remove the "photos and videos" part

              fetchedData = {
                name: cleanName,
                username: meta.author || url.pathname.split('/').filter(Boolean).pop(),
                bio: meta.description,
                image: meta.image?.url || meta.logo?.url,
                platform: getPlatformFromHost(host),
              };
            }
          }
        }

        setData(fetchedData);
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('Failed to fetch profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [profileUrl]);

  return { data, loading, error };
}

function getPlatformFromHost(host: string): SocialPlatform | undefined {
  if (host.includes('instagram.com')) return 'instagram';
  if (host.includes('linkedin.com')) return 'linkedin';
  if (host.includes('twitter.com') || host.includes('x.com')) return 'x';
  if (host.includes('github.com')) return 'github';
  return 'website';
}
