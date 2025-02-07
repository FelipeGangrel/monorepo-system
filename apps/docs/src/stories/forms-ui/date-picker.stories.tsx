import { DatePicker } from '@felipegangrel/forms-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  title: 'forms-ui/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  args: {
    clearable: true,
    onChange: console.log,
  },
  argTypes: {
    language: { control: 'select', options: ['en', 'pt', 'es', 'de'] },
    clearable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Example: Story = {
  render: (args) => <DatePicker {...args} />,
};
