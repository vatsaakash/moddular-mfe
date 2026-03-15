'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from './ProfileCard.module.scss';
import { useProfileData } from './useProfileData';

import { SocialPlatform, ProfileStats } from './types';
export type { SocialPlatform, ProfileStats };

export interface ProfileCardProps {
  /** Profile name */
  name?: string;
  /** Professional title / Username */
  username?: string;
  /** Bio or description */
  bio?: string;
  /** Profile image URL */
  image?: string;
  /** Visual variant */
  variant?: 'split' | 'full';
  /** Primary platform branding */
  platform?: SocialPlatform;
  /** Profile statistics */
  stats?: ProfileStats;
  /** Is the profile verified? */
  isVerified?: boolean;
  /** Label for the follow button */
  followLabel?: string;
  /** Callback when follow button is clicked */
  onFollow?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Force a specific theme for this component */
  theme?: 'light' | 'dark';
  /** Social media profile URL (auto-resolves platform and username) */
  profileUrl?: string;
}

const Icons = {
  Verified: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7l-3.7-3.7 1.4-1.4 2.3 2.3 5.3-5.3 1.4 1.4-6.7 6.7z" />
    </svg>
  ),
  Followers: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  ),
  Following: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
  Posts: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
};

export function ProfileCard({
  name: propName,
  username: propUsername,
  bio: propBio,
  image: propImage,
  variant = 'split',
  platform: propPlatform,
  stats: propStats,
  isVerified = false,
  followLabel = 'Follow +',
  onFollow,
  className = '',
  theme,
  profileUrl,
}: ProfileCardProps) {
  const { data: fetchedData, loading } = useProfileData(profileUrl);

  // Merge props with fetched data
  const name = propName || fetchedData?.name || 'Loading...';
  const username = propUsername || fetchedData?.username;
  const bio = propBio || fetchedData?.bio;
  const image = propImage || fetchedData?.image || '';
  const stats = propStats || fetchedData?.stats;
  const platform = propPlatform || fetchedData?.platform;

  const PlatformIcon = platform ? Icons[platform === 'x' ? 'X' : (platform.charAt(0).toUpperCase() + platform.slice(1)) as keyof typeof Icons] : null;

  return (
    <div
      className={`${styles.profileCard} ${styles[variant]} ${platform ? styles[platform] : ''} ${loading ? styles.isLoading : ''} ${className}`}
      data-component-theme={theme}
    >
      {variant === 'full' && (
        <div className={styles.fullBg}>
          {image && <img src={image} alt="" className={styles.background} aria-hidden="true" />}
          <div className={styles.overlay} />
        </div>
      )}

      <div className={styles.header}>
        {image && <img src={image} alt={name} className={styles.avatar} />}
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection}>
          <div className={styles.nameRow}>
            <h3 className={styles.name}>{name}</h3>
            {isVerified && <Icons.Verified className={styles.verifiedIcon} />}
          </div>
          {username && <span className={styles.username}>{username.startsWith('@') ? username : `@${username}`}</span>}
        </div>

        {bio && <p className={styles.bio}>{bio}</p>}

        {stats && (
          <div className={styles.statsBar}>
            {stats.followers !== undefined && (
              <div className={styles.statItem}>
                <Icons.Followers className={styles.statIcon} />
                <span className={styles.statValue}>{stats.followers}</span>
                <span className={styles.statLabel}>followers</span>
              </div>
            )}
            {stats.posts !== undefined && (
              <div className={styles.statItem}>
                <Icons.Posts className={styles.statIcon} />
                <span className={styles.statValue}>{stats.posts}</span>
                <span className={styles.statLabel}>posts</span>
              </div>
            )}
            {stats.following !== undefined && (
              <div className={styles.statItem}>
                <Icons.Following className={styles.statIcon} />
                <span className={styles.statValue}>{stats.following}</span>
                <span className={styles.statLabel}>following</span>
              </div>
            )}
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.followBtn} onClick={onFollow} type="button">
            {followLabel}
          </button>
          {PlatformIcon && (
            <div className={styles.platformBadge}>
              <PlatformIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
