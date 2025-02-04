import { AlertDialog, Button } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertDialog> = {
  title: 'core-ui/AlertDialog',
  tags: ['autodocs'],
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertDialog.Trigger asChild>
          <Button>Trigger</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Title</AlertDialog.Title>
          <AlertDialog.Description>Description</AlertDialog.Description>
          <AlertDialog.Action>Action</AlertDialog.Action>
        </AlertDialog.Content>
      </>
    ),
  },
  render: (args) => <AlertDialog {...args} />,
};
