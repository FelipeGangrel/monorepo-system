import { useReactTable } from '@tanstack/react-table';
import * as React from 'react';

import type { LanguageOption } from '#/lib/intl';

import type { SelectionMode } from './types';

type ContextState = {
  table: ReturnType<typeof useReactTable<any>>;
  language: LanguageOption;
  selectionMode?: SelectionMode;
};

export const DataTableContext = React.createContext<ContextState>(
  {} as ContextState
);
