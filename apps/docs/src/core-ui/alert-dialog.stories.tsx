import type { Meta, StoryObj } from '@storybook/react';

import { AlertDialog } from '@/core-ui/components/ui/alert-dialog';
import { Button } from '@/core-ui/components/ui/button';

const meta: Meta<typeof AlertDialog.Root> = {
  title: 'core-ui/AlertDialog',
  tags: ['autodocs'],
  component: AlertDialog.Root,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog.Root>;

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
  render: (args) => <AlertDialog.Root {...args} />,
};
