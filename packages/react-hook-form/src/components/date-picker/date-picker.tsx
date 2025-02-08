import { Button, Calendar, Popover } from '@felipegangrel/core-ui';
import { CalendarIcon, XIcon } from 'lucide-react';
import * as React from 'react';

import { Form } from '@/components/form';
import {
  inferLocaleFromLanguage,
  intl,
  LanguageOption,
  makeDateFormatter,
} from '@/lib/intl';
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
  onChange?: (...event: any[]) => void;
  dateFormat?: string;
};

const DatePicker = ({
  className,
  placeholder,
  clearable,
  onChange,
  value: selected,
  language = 'pt',
  dateFormat = 'PPP',
}: DatePickerProps) => {
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  const d = makeDateFormatter(language);

  const onClear = React.useCallback(
    (event: React.MouseEvent) => {
      onChange?.(undefined);
      event.stopPropagation();
    },
    [onChange]
  );

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Form.Control>
          <Button
            variant={'outline'}
            className={cn(
              'rhf-w-full rhf-justify-start rhf-text-left rhf-font-normal',
              !selected && 'rhf-text-muted-foreground',
              className
            )}
          >
            <CalendarIcon className="rhf-mr-2 rhf-h-4 rhf-w-4" />
            {selected ? d(selected, dateFormat) : placeholder || t('pickADate')}
            {clearable && selected && (
              <span className="rhf-ml-auto" onClick={onClear}>
                <XIcon className="rhf-ml-2 rhf-h-4 rhf-w-4 rhf-text-muted-foreground hover:rhf-text-foreground" />
                <span className="rhf-sr-only">Clear</span>
              </span>
            )}
          </Button>
        </Form.Control>
      </Popover.Trigger>
      <Popover.Content className="rhf-w-auto rhf-p-0">
        <Calendar
          locale={inferLocaleFromLanguage(language)}
          mode="single"
          selected={selected}
          onSelect={onChange}
          initialFocus
        />
      </Popover.Content>
    </Popover>
  );
};
DatePicker.displayName = 'DatePicker';

export { DatePicker };
