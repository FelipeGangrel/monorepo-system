import { Button, Calendar, Popover } from '@felipegangrel/core-ui';
import { format } from 'date-fns';
import { CalendarIcon, XIcon } from 'lucide-react';
import * as React from 'react';

import { intl, LanguageOption } from '@/lib/intl';
import { cn } from '@/lib/utils';

const dictionary = intl.makeDictionary({
  pickADate: {
    en: 'Pick a date',
    pt: 'Escolha uma data',
    es: 'Escoja una fecha',
    de: 'Wähle ein Datum',
  },
} as const);

type DatePickerProps = React.HTMLAttributes<HTMLElement> & {
  placeholder?: string;
  language?: LanguageOption;
  clearable?: boolean;
  value?: Date;
  onChange?: (date?: Date) => void;
};

const DatePicker = ({
  className,
  language,
  placeholder,
  clearable,
  value,
  onChange,
}: DatePickerProps) => {
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  const [date, setDate] = React.useState(value);

  const shownValue = React.useMemo(() => {
    if (date) {
      return format(date, 'PPP');
    }

    return placeholder ?? t('pickADate');
  }, [date, placeholder, t]);

  React.useEffect(() => {
    onChange?.(date);
  }, [date, onChange]);

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'forms-w-[280px] forms-justify-start forms-text-left forms-font-normal',
            !date && 'forms-text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="forms-mr-2 forms-h-4 forms-w-4" />
          {shownValue}
          {clearable && date && (
            <span
              className="forms-ml-auto"
              onClick={(event) => {
                setDate(undefined);
                event.stopPropagation();
              }}
            >
              <XIcon className="forms-ml-2 forms-h-4 forms-w-4 forms-text-muted-foreground hover:forms-text-foreground" />
              <span className="forms-sr-only">Clear</span>
            </span>
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="forms-w-auto forms-p-0">
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

export { DatePicker };
