import { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Hugsy Kit/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Defines the HTML heading level (h1 - h6)',
    },
    children: {
      control: 'text',
      description: 'The content of the heading',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A Heading component that dynamically renders HTML heading tags from h1 to h6 based on the `level` prop.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Dynamic Heading Level',
  },
  argTypes: {
    level: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6] },
    },
  },
};

// Separate stories for each level, for quick access
export const H1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const H4: Story = {
  args: {
    level: 4,
    children: 'Heading Level 4',
  },
};

export const H5: Story = {
  args: {
    level: 5,
    children: 'Heading Level 5',
  },
};

export const H6: Story = {
  args: {
    level: 6,
    children: 'Heading Level 6',
  },
};
