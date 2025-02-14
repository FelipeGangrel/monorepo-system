import { Settings2 } from 'lucide-react';
import * as React from 'react';

import { Button, ButtonProps } from '#/components/ui/button';
import { DropdownMenu } from '#/components/ui/dropdown-menu';
import { intl } from '#/lib/intl';
import { cn } from '#/lib/utils';

import { DataTableContext } from '../context';

const dictionary = intl.makeDictionary({
  viewOptionsLabel: {
    en: 'View',
    pt: 'Exibição',
    es: 'Ver',
    de: 'Ansicht',
  },
  toggleColumnsLabel: {
    en: 'Toggle columns',
    pt: 'Exibir colunas',
    es: 'Alternar columnas',
    de: 'Spalten umschalten',
  },
} as const);

const ViewOptions: React.FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  const { table, language } = React.use(DataTableContext);
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          className={cn('core-ml-auto', className)}
          {...props}
        >
          <Settings2 />
          {t('viewOptionsLabel')}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="core-w-[150px]">
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
                className="core-capitalize"
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
