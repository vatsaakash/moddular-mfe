import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroBanner } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    badge: { control: 'text' },
    description: { control: 'text' },
    ctaText: { control: 'text' },
    imagePosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    blobShape: {
      control: 'select',
      options: ['organic', 'circle', 'square', 'pill', 'leaf'],
      description: 'Predefined shape for the background blob',
    },
    blobAnimationDuration: {
      control: 'text',
      description: 'CSS duration string for blob animation',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    badge: 'Welcome To Techsauq',
    title: (
      <>
        Transforming a <br />
        Ideas into a <br />
        <span>Digital world</span>
      </>
    ),
    description: 'Crafting intuitive designs that captivate and inspire. Building robust websites that elevate brands online. Empowering businesses with innovative digital solutions.',
    ctaText: 'Book a Consultation',
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Team working together',
    imagePosition: 'right',
    floatingCards: [
      {
        label: 'Pricing',
        value: '12%',
        trend: { value: '96% Quality', isUp: true }
      },
      {
        label: 'Overall Activity',
        value: '98%',
        trend: { value: 'Growth', isUp: true }
      }
    ]
  },
};

export const FullDesign: Story = {
  args: {
    ...Default.args,
    floatingCards: [
      {
        label: 'Design & Development',
        value: 'Top Rated',
        trend: { value: '100%', isUp: true }
      },
      {
        label: 'Best Services',
        value: 'Premium',
      },
      {
        label: 'Our Clients',
        value: '500+',
        trend: { value: 'Happy', isUp: true }
      },
      {
        label: 'Overall Activity',
        value: '96%',
        trend: { value: '+12%', isUp: true }
      }
    ]
  }
};

export const ImageLeft: Story = {
  args: {
    ...Default.args,
    imagePosition: 'left',
  },
};

export const NoImage: Story = {
  args: {
    badge: 'New Feature',
    title: 'The Future of MFE is Here',
    description: 'Build faster, scale easier, and maintain control with our modular component library.',
    ctaText: 'Get Started Now',
    imagePosition: 'right',
  },
};

export const CustomContent: Story = {
  args: {
    badge: 'Limited Offer',
    title: 'Elevate Your Brand Identity',
    description: 'Specialized solutions for modern businesses looking to disrupt the market.',
    ctaText: 'View Portfolio',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Analytics Dashboard',
    floatingCards: [
      {
        label: 'Performance',
        value: '99.9%',
        trend: { value: '+5%', isUp: true }
      },
      {
        label: 'Uptime',
        value: '24/7',
      }
    ]
  },
};

export const CustomBlob: Story = {
  args: {
    ...FullDesign.args,
    blobShape: 'leaf',
    blobAnimationDuration: '10s',
  },
};

export const PillShape: Story = {
  args: {
    ...FullDesign.args,
    blobShape: 'pill',
    blobAnimationDuration: '15s',
  },
};
