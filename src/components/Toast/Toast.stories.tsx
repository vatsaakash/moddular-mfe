import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Toast } from './Toast';

function ToastActionDemo(props: ComponentProps<typeof Toast>) {
  const [active, setActive] = useState(true);

  if (!active) {
    return (
      <button type="button" onClick={() => setActive(true)}>
        Show Toast Again
      </button>
    );
  }

  return (
    <Toast
      {...props}
      onClose={() => setActive(false)}
      onAction={() => setActive(false)}
    />
  );
}

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Optional heading text',
      control: { type: 'text' },
    },
    message: {
      description: 'Main toast body content',
      control: { type: 'text' },
    },
    variant: {
      description: 'Semantic visual variant',
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    duration: {
      description: 'Auto-dismiss time in milliseconds (0 disables auto-dismiss)',
      control: { type: 'number', min: 0, step: 500 },
    },
    showClose: {
      description: 'Show close button',
      control: { type: 'boolean' },
    },
    actionLabel: {
      description: 'Optional action button label',
      control: { type: 'text' },
    },
    showIcon: {
      description: 'Show leading status icon',
      control: { type: 'boolean' },
    },
    theme: {
      description: 'Component-level theme override',
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    onClose: {
      table: { disable: true },
    },
    onAction: {
      table: { disable: true },
    },
    className: {
      description: 'Additional CSS class',
      control: { type: 'text' },
    },
  },
  args: {
    title: 'Saved successfully',
    message: 'Your profile updates are now live.',
    variant: 'success',
    duration: 5000,
    showClose: true,
    showIcon: true,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {};

export const Info: Story = {
  args: {
    title: 'Heads up',
    message: 'A newer version of this package is available.',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    title: 'Connection unstable',
    message: 'Your network is slow. Some data may load late.',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Upload failed',
    message: 'We could not upload your image. Try again.',
    variant: 'error',
    duration: 0,
  },
};

export const WithAction: Story = {
  args: {
    title: 'Message archived',
    message: 'Conversation moved to archive.',
    variant: 'success',
    duration: 0,
    actionLabel: 'Undo',
  },
  render: (args) => <ToastActionDemo {...args} />,
};
