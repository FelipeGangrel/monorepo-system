import { Label, Switch } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * A control that allows the user to toggle between checked and not checked.
 */
const meta: Meta<typeof Switch> = {
  title: 'core-ui/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="docs-flex docs-items-center docs-space-x-2">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Example: Story = {
  args: {
    id: 'switch-default',
  },
  render: (args) => (
    <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
  ),
};

export const Checked: Story = {
  args: {
    id: 'switch-checked',
    checked: true,
  },
  render: (args) => (
    <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    id: 'switch-disabled',
    disabled: true,
  },
  render: (args) => (
    <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
  ),
};

export const CheckedAndDisabled: Story = {
  args: {
    id: 'switch-checked-disabled',
    checked: true,
    disabled: true,
  },
  render: (args) => (
    <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
  ),
};
