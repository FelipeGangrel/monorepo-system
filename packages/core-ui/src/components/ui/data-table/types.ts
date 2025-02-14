import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import type { LanguageOption } from '#/lib/intl';

import {
  Content,
  Filter,
  FuzzyFilter,
  Pagination,
  ViewOptions,
} from './primitives';

export type SelectionMode = 'row' | 'page' | 'table';

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children?: React.ReactNode;
  /**
   * Determines the selection behavior in the data table.
   *
   * - `'row'`: Individual rows can be selected.
   * - `'page'`: All rows on the current page can be selected at once.
   * - `'table'`: All rows in the entire data table can be selected at once.
   */
  selectionMode?: SelectionMode;
  language?: LanguageOption;
};

export type DataTableComponent = React.FC<DataTableProps<any, any>> & {
  Content: typeof Content;
  Filter: typeof Filter;
  FuzzyFilter: typeof FuzzyFilter;
  Pagination: typeof Pagination;
  ViewOptions: typeof ViewOptions;
};
