import { Button, Collapsible } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronsUpDown } from 'lucide-react';

const meta: Meta<typeof Collapsible> = {
  title: 'core-ui/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    className: 'docs-w-full docs-max-w-[400px] docs-space-y-2',
    children: (
      <>
        <Collapsible.Trigger>Trigger</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </>
    ),
  },
  render: (args) => <Collapsible {...args} />,
};

export const WithButtonAndIcon: Story = {
  args: {
    className: 'docs-w-full docs-max-w-[400px] docs-space-y-2',
    children: (
      <>
        <div className="docs-flex docs-items-center docs-justify-between docs-space-x-4 px-4">
          <h4 className="docs-text-sm docs-font-semibold">
            @fulano starred 3 repositories
          </h4>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="docs-h-4 docs-w-4" />
              <span className="docs-sr-only">Toggle</span>
            </Button>
          </Collapsible.Trigger>
        </div>
        <div className="docs-rounded-md docs-border docs-px-4 docs-py-2 docs-font-mono docs-text-sm docs-shadow-sm">
          @radix-ui/primitives
        </div>
        <Collapsible.Content className="docs-space-y-2">
          <div className="docs-rounded-md docs-border docs-px-4 docs-py-2 docs-font-mono docs-text-sm docs-shadow-sm">
            @radix-ui/colors
          </div>
          <div className="docs-rounded-md docs-border docs-px-4 docs-py-2 docs-font-mono docs-text-sm docs-shadow-sm">
            @stitches/react
          </div>
        </Collapsible.Content>
      </>
    ),
  },
  render: (args) => <Collapsible {...args} />,
};
