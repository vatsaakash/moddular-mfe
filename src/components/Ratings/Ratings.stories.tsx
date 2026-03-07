import type { Meta, StoryObj } from '@storybook/react';
import { Ratings } from './Ratings';

const meta: Meta<typeof Ratings> = {
  title: 'Components/Ratings',
  component: Ratings,
  tags: ['autodocs'],
  argTypes: {
    max: {
      description: 'Maximum number of stars/icons',
      control: { type: 'number', min: 1, max: 10 },
    },
    value: {
      description: 'Current value (controlled mode)',
      control: { type: 'number', min: 0, max: 10 },
    },
    defaultValue: {
      description: 'Default value (uncontrolled mode)',
      control: { type: 'number', min: 0, max: 10 },
    },
    readonly: {
      description: 'Read-only display mode',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      description: 'Icon type',
      control: { type: 'select' },
      options: ['star', 'heart', 'circle'],
    },
    showLabel: {
      description: 'Show numeric label',
      control: { type: 'boolean' },
    },
    theme: {
      description: 'Component-level theme override',
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    className: {
      description: 'Additional CSS class',
      control: { type: 'text' },
    },
  },
  args: {
    max: 5,
    defaultValue: 3,
    readonly: false,
    size: 'md',
    icon: 'star',
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof Ratings>;

export const Default: Story = {};

export const Stars: Story = {
  args: {
    icon: 'star',
    defaultValue: 4,
    size: 'lg',
  },
};

export const Hearts: Story = {
  args: {
    icon: 'heart',
    defaultValue: 3,
    size: 'lg',
  },
};

export const Circles: Story = {
  args: {
    icon: 'circle',
    defaultValue: 2,
    size: 'lg',
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readonly: true,
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    defaultValue: 5,
    max: 10,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: 'heart',
    defaultValue: 3,
  },
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: 7,
    icon: 'star',
    size: 'md',
    showLabel: true,
  },
};
