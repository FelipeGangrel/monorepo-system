import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
};

export type DataTableContentProps = React.HTMLAttributes<HTMLDivElement>;
export type DataTablePaginationProps = React.HTMLAttributes<HTMLDivElement>;

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: React.FunctionComponent<DataTableContentProps>;
  Pagination: React.FunctionComponent<DataTablePaginationProps>;
};
