import { Button } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { SmileIcon } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'core-ui/Button',
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
      <button className="docs-relative docs-group docs-h-12">
        <div className="docs-absolute docs-transitiona-all docs-duration-1000 docs-opacity-70 docs--inset-px docs-bg-gradient-to-r docs-from-[#44BCFF] docs-via-[#FF44EC] docs-to-[#FF675E] docs-rounded-xl docs-blur-lg group-hover:docs-opacity-100 group-hover:docs--inset-1 group-hover:docs-duration-200"></div>
        <a
          href="#"
          title="Get quote now"
          className="docs-relative docs-inline-flex docs-items-center docs-justify-center docs-px-8 docs-py-4 docs-text-lg docs-font-bold docs-text-white docs-transition-all docs-duration-200 docs-bg-gray-900 docs-rounded-xl focus:docs-outline-none focus:docs-ring-2 focus:docs-ring-offset-2 focus:docs-ring-gray-900"
          role="button"
        >
          Get it now
        </a>
      </button>
    ),
  },
};
