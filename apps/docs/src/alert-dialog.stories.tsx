import type { Meta, StoryObj } from '@storybook/react';
import { Button, AlertDialog } from '@felipegangrel/core-ui';

const meta: Meta<unknown> = {
  title: 'core-ui/AlertDialog',
  tags: ['autodocs'],
  component: () => {
    return (
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Button>Trigger</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Title</AlertDialog.Title>
          <AlertDialog.Description>Description</AlertDialog.Description>
          <AlertDialog.Action>Action</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<unknown>;

export const Default: Story = {
  args: {},
};
