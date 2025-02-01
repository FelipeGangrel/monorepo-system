import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { DataTableContext } from './context';
import type {
  DataTableComponent,
  DataTableContentProps,
  DataTablePaginationProps,
  DataTableProps,
} from './types';
import { getChildrenDisplayNames } from './utils';

const DataTable = Object.assign(
  <TData, TValue>({
    columns,
    data,
    children,
  }: DataTableProps<TData, TValue>) => {
    const childrenDisplayNames = getChildrenDisplayNames(children);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      ...(childrenDisplayNames?.includes('DataTable.Pagination') && {
        getPaginationRowModel: getPaginationRowModel(),
      }),
    });

    return (
      <DataTableContext.Provider value={{ table, columns }}>
        {children}
      </DataTableContext.Provider>
    );
  },
  {}
) as DataTableComponent;
DataTable.displayName = 'DataTable';

DataTable.Content = ({ className, ...props }: DataTableContentProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { table, columns } = React.useContext(DataTableContext);

  return (
    <div className={cn(className)} {...props}>
      <Table>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Head key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.Head>
                );
              })}
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
              <Table.Cell colSpan={columns.length} className="h-24 text-center">
                No results.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
DataTable.Content.displayName = 'DataTable.Content';

DataTable.Pagination = ({ className, ...props }: DataTablePaginationProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { table } = React.useContext(DataTableContext);

  if (typeof table.getPaginationRowModel !== 'function') {
    return null;
  }

  return (
    <div
      className={cn('flex items-center justify-end space-x-2 py-4', className)}
      {...props}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
};
DataTable.Pagination.displayName = 'DataTable.Pagination';

export { DataTable };
