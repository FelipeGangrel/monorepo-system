import { Button } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { SmileIcon } from 'lucide-react';

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: 'Core UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'link',
        'ghost',
        'outline',
        'destructive',
        'secondary',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    children: <SmileIcon />,
    size: 'icon',
  },
};

export const Custom: Story = {
  args: {
    asChild: true,
    variant: 'ghost',
    className: 'core-bg-transparent hover:core-bg-transparent',
    children: (
      <button className="group relative h-12">
        <div className="transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
        <a
          href="#"
          title="Get quote now"
          className="relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          role="button"
        >
          Get it now
        </a>
      </button>
    ),
  },
};
