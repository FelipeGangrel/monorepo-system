import { Button, Dialog } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 */
const meta: Meta<typeof Dialog> = {
  title: 'Core UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger asChild>
          <Button>Trigger</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Are you absolutely sure?</Dialog.Title>
            <Dialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </>
    ),
  },
};
