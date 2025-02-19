import { Button, Popover } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Displays rich content in a portal, triggered by a button.
 */
const meta: Meta<typeof Popover> = {
  title: 'Core UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Popover.Trigger asChild>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </Popover.Content>
      </>
    ),
  },
};

export const WithArrowAndClose: Story = {
  args: {
    children: (
      <>
        <Popover.Trigger asChild>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <Popover.Arrow />
          <Popover.Close asChild>
            <Button variant="secondary" className="mt-2">
              Close
            </Button>
          </Popover.Close>
        </Popover.Content>
      </>
    ),
  },
};
