import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('core-p-3', className)}
      classNames={{
        months:
          'core-flex core-flex-col sm:core-flex-row core-space-y-4 sm:core-space-x-4 sm:core-space-y-0',
        month: 'core-space-y-4',
        caption:
          'core-flex core-justify-center core-pt-1 core-relative core-items-center',
        caption_label: 'core-text-sm core-font-medium',
        nav: 'core-space-x-1 core-flex core-items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'core-h-7 core-w-7 core-bg-transparent core-p-0 core-opacity-50 hover:core-opacity-100'
        ),
        nav_button_previous: 'core-absolute core-left-1',
        nav_button_next: 'core-absolute core-right-1',
        table: 'core-w-full core-border-collapse core-space-y-1',
        head_row: 'core-flex',
        head_cell:
          'core-text-muted-foreground core-rounded-md core-w-8 core-font-normal core-text-[0.8rem]',
        row: 'core-flex core-w-full core-mt-2',
        cell: cn(
          'core-relative core-p-0 core-text-center core-text-sm focus-within:core-relative focus-within:core-z-20 [&:has([aria-selected])]:core-bg-accent [&:has([aria-selected].day-outside)]:core-bg-accent/50 [&:has([aria-selected].day-range-end)]:core-rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:core-rounded-r-md [&:has(>.day-range-start)]:core-rounded-l-md first:[&:has([aria-selected])]:core-rounded-l-md last:[&:has([aria-selected])]:core-rounded-r-md'
            : '[&:has([aria-selected])]:core-rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'core-h-8 core-w-8 core-p-0 core-font-normal aria-selected:core-opacity-100'
        ),
        day_range_start: 'core-day-range-start',
        day_range_end: 'core-day-range-end',
        day_selected:
          'core-bg-primary core-text-primary-foreground hover:core-bg-primary hover:core-text-primary-foreground focus:core-bg-primary focus:core-text-primary-foreground',
        day_today: 'core-bg-accent core-text-accent-foreground',
        day_outside:
          'core-day-outside core-text-muted-foreground aria-selected:core-bg-accent/50 aria-selected:core-text-muted-foreground',
        day_disabled: 'core-text-muted-foreground core-opacity-50',
        day_range_middle:
          'aria-selected:core-bg-accent aria-selected:core-text-accent-foreground',
        day_hidden: 'core-invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn('core-h-4 core-w-4', className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn('core-h-4 core-w-4', className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
export type { CalendarProps };
