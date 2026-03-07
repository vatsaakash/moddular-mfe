import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const sampleItems = [
  {
    title: 'Fully Accessible',
    content:
      'All components follow WAI-ARIA patterns with proper keyboard navigation, focus management, and screen reader support.',
  },
  {
    title: 'Theme-Ready',
    content:
      'Built with CSS custom properties, supporting light, dark, and system themes out of the box. White-label ready with brand override maps.',
  },
  {
    title: 'Responsive by Default',
    content:
      'Every component adapts to all screen sizes using mobile-first responsive design with SCSS breakpoint mixins.',
  },
  {
    title: 'Performance Optimized',
    content:
      'Lightweight, tree-shakeable components with no external runtime dependencies. SCSS modules ensure zero unused CSS.',
  },
  {
    title: 'Disabled Panel (cannot open)',
    content: 'This panel is disabled and cannot be opened.',
    disabled: true,
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of accordion panels',
      control: { type: 'object' },
    },
    allowMultiple: {
      description: 'Allow multiple panels open at once',
      control: { type: 'boolean' },
    },
    defaultOpen: {
      description: 'Indices of panels open by default',
      control: { type: 'object' },
    },
    variant: {
      description: 'Visual style variant',
      control: { type: 'select' },
      options: ['bordered', 'flush', 'separated'],
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
    items: sampleItems,
    allowMultiple: false,
    defaultOpen: [],
    variant: 'bordered',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    defaultOpen: [0],
  },
};

export const Flush: Story = {
  args: {
    variant: 'flush',
  },
};

export const Separated: Story = {
  args: {
    variant: 'separated',
    defaultOpen: [1],
  },
};

export const MultipleOpen: Story = {
  args: {
    variant: 'separated',
    allowMultiple: true,
    defaultOpen: [0, 1],
  },
};

export const WithDisabledPanel: Story = {
  args: {
    variant: 'bordered',
    items: sampleItems,
  },
};
