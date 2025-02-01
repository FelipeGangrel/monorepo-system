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
import * as React from 'react';

import { DataTableContext } from './context';
import {
  Content,
  Filter,
  GlobalFilter,
  Pagination,
  ViewOptions,
} from './primitives';
import type { DataTableComponent, DataTableProps } from './types';
import { fuzzyFilter, fuzzySort, getChildrenDisplayNames } from './utils';

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
    const [globalFilter, setGlobalFilter] = React.useState('');
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable<TData>({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      globalFilterFn: 'fuzzy',
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      ...(childrenDisplayNames?.includes('DataTable.Pagination') && {
        getPaginationRowModel: getPaginationRowModel(),
      }),
      state: {
        sorting,
        columnFilters,
        globalFilter,
        columnVisibility,
        rowSelection,
      },
      filterFns: {
        fuzzy: fuzzyFilter,
      },
    });

    return (
      <DataTableContext.Provider value={{ table }}>
        {children}
      </DataTableContext.Provider>
    );
  },
  {
    Content,
    Filter,
    GlobalFilter,
    Pagination,
    ViewOptions,
  }
) as DataTableComponent;
DataTable.displayName = 'DataTable';

export { DataTable };
