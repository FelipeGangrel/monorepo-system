import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import type { LanguageOption } from '@/lib/intl';

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
  language?: LanguageOption;
};

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: typeof Content;
  Filter: typeof Filter;
  FuzzyFilter: typeof FuzzyFilter;
  Pagination: typeof Pagination;
  ViewOptions: typeof ViewOptions;
};
