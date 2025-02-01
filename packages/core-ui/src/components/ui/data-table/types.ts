import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import { Content, Filter, Pagination, ViewOptions } from './primitives';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
};

export type DataTableContentProps = React.HTMLAttributes<HTMLDivElement>;

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: typeof Content;
  Filter: typeof Filter;
  Pagination: typeof Pagination;
  ViewOptions: typeof ViewOptions;
};
