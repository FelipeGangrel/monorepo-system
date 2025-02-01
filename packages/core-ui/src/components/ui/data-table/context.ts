import { ColumnDef, useReactTable } from '@tanstack/react-table';
import * as React from 'react';

type ContextState<TData, TValue> = {
  table: ReturnType<typeof useReactTable<TData>>;
  columns: ColumnDef<TData, TValue>[];
};

export const DataTableContext = React.createContext<ContextState<any, any>>(
  {} as ContextState<any, any>
);
