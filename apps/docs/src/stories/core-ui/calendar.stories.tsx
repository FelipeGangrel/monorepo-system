import { Calendar } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';

// Default export for the story
const meta: Meta<typeof Calendar> = {
  title: 'core-ui/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    showOutsideDays: true,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const today = new Date();

export const Default: Story = {
  args: {
    mode: 'single',
    onSelect: (value) => {
      console.log(value);
    },
  },
};

export const SingleDateSelection: Story = {
  args: {
    mode: 'single',
    selected: today,
  },
};

export const RangeDateSelection: Story = {
  args: {
    mode: 'range',
    selected: { from: today, to: addDays(today, 7) },
  },
};

export const WithDisabledDates: Story = {
  args: {
    mode: 'single',
    disabled: [{ before: today }],
  },
};
