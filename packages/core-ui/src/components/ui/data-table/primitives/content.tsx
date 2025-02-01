import { flexRender } from '@tanstack/react-table';
import * as React from 'react';

import { Table } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Content: React.FunctionComponent<Props> = ({ className, ...props }) => {
  const { table } = React.useContext(DataTableContext);

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
              <Table.Cell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No results.
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
