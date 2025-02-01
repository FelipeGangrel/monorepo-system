import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';

import { DataTableContext } from './context';
import type { DataTableProps } from './types';
import { getChildrenDisplayNames } from './utils';

const DataTable = <TData, TValue>({
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
};
DataTable.displayName = 'DataTable';

const DataTableContent = () => {
  const { table, columns } = React.useContext(DataTableContext);

  return (
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
  );
};
DataTableContent.displayName = 'DataTable.Content';

const DataTablePagination = () => {
  const { table } = React.useContext(DataTableContext);

  if (typeof table.getPaginationRowModel !== 'function') {
    return null;
  }

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
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
DataTablePagination.displayName = 'DataTable.Pagination';

export { DataTable, DataTableContent, DataTablePagination };
