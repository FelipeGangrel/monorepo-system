import { Settings2 } from 'lucide-react';
import * as React from 'react';

import { Button, ButtonProps } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { intl } from '@/lib/intl';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

const dictionary = intl.makeDictionaryExtension({
  viewOptionsLabel: {
    enUS: 'View',
    ptBR: 'Exibição',
  },
  toggleColumnsLabel: {
    enUS: 'Toggle columns',
    ptBR: 'Exibir colunas',
  },
} as const);

const ViewOptions: React.FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  const { table, language } = React.useContext(DataTableContext);
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          className={cn('ml-auto', className)}
          {...props}
        >
          <Settings2 />
          {t('viewOptionsLabel')}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-[150px]">
        <DropdownMenu.Label>{t('toggleColumnsLabel')}</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenu.CheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
              >
                {column.id}
              </DropdownMenu.CheckboxItem>
            );
          })}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
ViewOptions.displayName = 'DataTable.ViewOptions';

export { ViewOptions };
