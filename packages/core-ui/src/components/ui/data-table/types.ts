import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
};
