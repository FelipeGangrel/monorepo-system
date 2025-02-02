import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import {
  Content,
  Filter,
  FuzzyFilter,
  Pagination,
  ViewOptions,
} from './primitives';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
  selectBy?: 'page' | 'all';
};

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: typeof Content;
  Filter: typeof Filter;
  FuzzyFilter: typeof FuzzyFilter;
  Pagination: typeof Pagination;
  ViewOptions: typeof ViewOptions;
};
