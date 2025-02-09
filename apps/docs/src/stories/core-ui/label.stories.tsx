import { Input, Label } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';

/**
 * Renders an accessible label associated with controls.
 */
const meta: Meta<typeof Label> = {
  title: 'core-ui/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Example: Story = {
  args: {
    children: 'Label',
  },
  render: (args) => <Label {...args} />,
};

export const ForInput: Story = {
  args: {
    htmlFor: 'input',
  },
  render: (args) => (
    <div className="space-y-2">
      <Label {...args}>Label</Label>
      <Input id="input" />
    </div>
  ),
};
