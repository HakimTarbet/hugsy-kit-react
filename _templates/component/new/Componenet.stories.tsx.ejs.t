---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';
import <%= name %> from './<%= name %>';

const meta: Meta<typeof <%= name %>> = {
    component: <%= name %>,
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
    args: {},
};