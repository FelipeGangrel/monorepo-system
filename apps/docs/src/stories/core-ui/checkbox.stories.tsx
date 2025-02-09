import { Checkbox } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

/**
 * A control that allows the user to toggle between checked and not checked.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'core-ui/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const Checked = () => {
  const [isChecked, setIsChecked] = React.useState<'indeterminate' | boolean>(
    true
  );

  return <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />;
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const WithCustomStyles: Story = {
  args: {
    className:
      'bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500',
  },
  render: (args) => <Checkbox {...args} />,
};
