import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

/** Instagram Style Split Card */
export const InstagramSplit: Story = {
  args: {
    name: 'Sophie Bennett',
    username: 'sophie.design',
    bio: 'Product Designer who focuses on simplicity & usability. Based in London.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'instagram',
    isVerified: true,
    stats: {
      followers: '12.5k',
      posts: 156,
      following: 432
    },
  },
};

/** Instagram Style Full Card with Glassmorphism */
export const InstagramFull: Story = {
  args: {
    ...InstagramSplit.args,
    variant: 'full',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
  },
};

/** X (formerly Twitter) Style Split Card */
export const XProfile: Story = {
  args: {
    name: 'Elon Musk',
    username: '@elonmusk',
    bio: 'Owner of X, Neuralink, SpaceX and Tesla. Mars enthusiast.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0adcc80?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'x',
    isVerified: true,
    stats: {
      followers: '170M',
      following: 541,
    },
  },
};

/** GitHub Style Split Card */
export const GitHubProfile: Story = {
  args: {
    name: 'Linus Torvalds',
    username: 'torvalds',
    bio: 'The creator of Linux and Git. Professional curmudgeon.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    variant: 'split',
    platform: 'github',
    stats: {
      posts: '24k',
      followers: '180k',
    },
    followLabel: 'Follow',
  },
};

/** Full Variant Light Mode */
export const LightFull: Story = {
  args: {
    ...InstagramFull.args,
    theme: 'light',
  },
};

export const AkashInstagram: Story = {
  args: {
    name: 'Akash Vatsa',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    profileUrl: 'https://www.instagram.com/vatsa_akash/',
    bio: 'Entrepreneur @ ICW Technologies. Building Moddular MFE.',
    variant: 'full',
    stats: {
      followers: '1.2k',
      posts: 24,
      following: 432
    },
  },
};

/** Live Fetch Demo - Paste any social media URL in the profileUrl control! */
export const LiveFetchDemo: Story = {
  args: {
    profileUrl: 'https://github.com/vatsaakash',
    variant: 'full',
  },
};

/** Instagram Live Fetch Demo */
export const InstagramLiveFetch: Story = {
  args: {
    profileUrl: 'https://www.instagram.com/vatsa_akash/',
    variant: 'full',
  },
};

/** LinkedIn Live Fetch Demo */
export const LinkedInLiveFetch: Story = {
  args: {
    profileUrl: 'https://www.linkedin.com/in/vatsaakash/',
    variant: 'split',
  },
};
