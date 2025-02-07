import { Badge } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta: Meta<typeof Badge> = {
  title: 'core-ui/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};
