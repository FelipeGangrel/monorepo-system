import { Button, Calendar, Popover, Select } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

/**
 * A date field component that allows users to enter and edit date.
 */
const meta: Meta<typeof Calendar> = {
  title: 'core-ui/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    showOutsideDays: true,
    language: 'pt',
  },
  argTypes: {
    language: { control: 'select', options: ['en', 'pt', 'es', 'de'] },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const today = new Date();

export const Example: Story = {
  args: {
    mode: 'single',
    onSelect: console.log,
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

export const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'docs-w-[280px] docs-justify-start docs-text-left docs-font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="docs-mr-2 docs-h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="docs-w-auto docs-p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </Popover.Content>
    </Popover>
  );
};

export const DateRangePicker = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="docs-grid docs-gap-2">
      <Popover>
        <Popover.Trigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'docs-w-[300px] docs-justify-start docs-text-left docs-font-normal',
              !date && 'docs-text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Content className="docs-w-auto docs-p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </Popover.Content>
      </Popover>
    </div>
  );
};

export const DatePickerWithPresets = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'docs-w-[280px] docs-justify-start docs-text-left docs-font-normal',
            !date && 'docs-text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="docs-flex docs-flex-col docs-space-y-2 docs-p-2 w-auto">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content position="popper">
            <Select.Item value="0">Today</Select.Item>
            <Select.Item value="1">Tomorrow</Select.Item>
            <Select.Item value="3">In 3 days</Select.Item>
            <Select.Item value="7">In a week</Select.Item>
          </Select.Content>
        </Select>
        <div className="docs-rounded-md docs-border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </Popover.Content>
    </Popover>
  );
};
