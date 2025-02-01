import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import {
  Content,
  Filter,
  GlobalFilter,
  Pagination,
  ViewOptions,
} from './primitives';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
};

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: typeof Content;
  Filter: typeof Filter;
  GlobalFilter: typeof GlobalFilter;
  Pagination: typeof Pagination;
  ViewOptions: typeof ViewOptions;
};
