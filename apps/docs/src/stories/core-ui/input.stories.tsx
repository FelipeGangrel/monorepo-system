import { Input } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';

/**
 * Displays a form input field or a component that looks like an input field.
 */
const meta: Meta<typeof Input> = {
  title: 'Core UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Example: Story = {
  render: (args) => <Input {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Input {...args} />,
};
