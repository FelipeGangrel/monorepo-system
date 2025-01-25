import { Button, Dialog } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog.Root> = {
  title: 'core-ui/Dialog',
  component: Dialog.Root,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Dialog.Root>;

export const Default: Story = {
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
