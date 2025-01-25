import { Button, Collapsible } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDown } from 'lucide-react';

const meta: Meta<typeof Collapsible.Root> = {
  title: 'core-ui/Collapsible',
  component: Collapsible.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Collapsible.Root>;

export const Default: Story = {
  args: {
    className: 'w-full max-w-[400px] space-y-2',
    children: (
      <>
        <Collapsible.Trigger>Trigger</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </>
    ),
  },
  render: (args) => <Collapsible.Root {...args} />,
};

export const WithButtonAndIcon: Story = {
  args: {
    className: 'w-full max-w-[400px] space-y-2',
    children: (
      <>
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @fulano starred 3 repositories
          </h4>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </Collapsible.Trigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <Collapsible.Content className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </Collapsible.Content>
      </>
    ),
  },
  render: (args) => <Collapsible.Root {...args} />,
};
