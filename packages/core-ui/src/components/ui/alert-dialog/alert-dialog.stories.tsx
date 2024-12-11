import { AlertDialog } from './alert-dialog';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button/button';

const meta: Meta<unknown> = {
  title: 'UI/AlertDialog',
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

