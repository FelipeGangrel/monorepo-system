import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { Settings2 } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import { DataTableContext } from './context';
import { Content, Pagination, ViewOptions } from './primitives';
import type { DataTableComponent, DataTableProps } from './types';
import { getChildrenDisplayNames } from './utils';

const DataTable = Object.assign(
  <TData, TValue>({
    columns,
    data,
    children,
  }: DataTableProps<TData, TValue>) => {
    const childrenDisplayNames = getChildrenDisplayNames(children);

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
      React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable<TData>({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      ...(childrenDisplayNames?.includes('DataTable.Pagination') && {
        getPaginationRowModel: getPaginationRowModel(),
      }),
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });

    return (
      <DataTableContext.Provider value={{ ...table }}>
        {children}
      </DataTableContext.Provider>
    );
  },
  {
    Content,
    Pagination,
    ViewOptions,
  }
) as DataTableComponent;
DataTable.displayName = 'DataTable';

export { DataTable };
