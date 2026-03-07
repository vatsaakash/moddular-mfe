import type { Meta, StoryObj } from '@storybook/react';
import { FAQ } from './FAQ';

const sampleItems = [
  {
    question: 'What is Moddular MFE?',
    answer:
      'Moddular MFE is an open-source collection of reusable, accessible, and themeable micro-frontend components built with Next.js and SCSS.',
  },
  {
    question: 'How do I install a component?',
    answer:
      'Each component is self-contained. Copy the component folder into your project and import it. All styling uses CSS custom properties so themes work out of the box.',
  },
  {
    question: 'Does it support dark mode?',
    answer:
      'Yes! Every component automatically adapts to light, dark, and system themes using CSS custom properties and the built-in ThemeProvider.',
  },
  {
    question: 'Can I customize the colors for my brand?',
    answer:
      'Absolutely. The SCSS system includes brand override maps. Set a data-brand attribute on your HTML element to swap the entire color palette.',
  },
  {
    question: 'Is it accessible?',
    answer:
      'Yes — all components follow WAI-ARIA authoring practices with full keyboard navigation, focus management, and screen reader support.',
  },
];

const meta: Meta<typeof FAQ> = {
  title: 'Components/FAQ',
  component: FAQ,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of question/answer pairs',
      control: { type: 'object' },
    },
    allowMultiple: {
      description: 'Allow multiple items to be open simultaneously',
      control: { type: 'boolean' },
    },
    defaultOpen: {
      description: 'Indices of items open by default',
      control: { type: 'object' },
    },
    variant: {
      description: 'Visual style variant',
      control: { type: 'select' },
      options: ['bordered', 'flush', 'card'],
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
type Story = StoryObj<typeof FAQ>;

export const Bordered: Story = {
  args: {
    variant: 'bordered',
  },
};

export const Flush: Story = {
  args: {
    variant: 'flush',
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
  },
};

export const MultipleOpen: Story = {
  args: {
    variant: 'card',
    allowMultiple: true,
    defaultOpen: [0, 2],
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
    variant: 'bordered',
  },
};
