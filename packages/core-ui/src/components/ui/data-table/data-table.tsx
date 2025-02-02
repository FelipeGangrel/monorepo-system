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
import { DataTableHelper } from './data-table-helper';
import {
  Content,
  Filter,
  FuzzyFilter,
  Pagination,
  ViewOptions,
} from './primitives';
import type { DataTableComponent, DataTableProps } from './types';
import { fuzzyFilter, fuzzySort, getChildrenDisplayNames } from './utils';

const DataTable = Object.assign(
  <TData, TValue>({
    columns: initialColumns,
    data,
    children,
    selectBy,
    language = 'enUS',
  }: DataTableProps<TData, TValue>) => {
    const childrenDisplayNames = getChildrenDisplayNames(children);

    const columns = React.useMemo(() => {
      const dt = new DataTableHelper<TData>();
      switch (selectBy) {
        case 'page':
          return [dt.buildSelectionByPageColumn(), ...initialColumns];
        case 'all':
          return [dt.buildSelectionByAllColumn(), ...initialColumns];
        default:
          return initialColumns;
      }
    }, [initialColumns, selectBy]);

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
      <DataTableContext.Provider value={{ table, language }}>
        {children}
      </DataTableContext.Provider>
    );
  },
  {
    Content,
    Filter,
    FuzzyFilter,
    Pagination,
    ViewOptions,
  }
) as DataTableComponent;
DataTable.displayName = 'DataTable';

export { DataTable, DataTableHelper };
