import { flexRender } from '@tanstack/react-table';
import * as React from 'react';

import { Table } from '@/components/ui/table';
import { intl } from '@/lib/intl';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';
import { SortableHead } from './sortable-head';

type ContentProps = React.HTMLAttributes<HTMLDivElement>;

const Content: React.FunctionComponent<ContentProps> = ({
  className,
  ...props
}) => {
  const { table, language } = React.useContext(DataTableContext);

  const t = intl.makeTranslator({
    dictionary: intl.baseDictionary,
    language,
  });

  return (
    <div className={cn(className)} {...props}>
      <Table>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <SortableHead key={header.id} header={header} />
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell
                colSpan={table.getAllColumns().length}
                className="core-h-24 core-text-center"
              >
                {t('noResultsFound')}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
Content.displayName = 'DataTable.Content';

export { Content };
