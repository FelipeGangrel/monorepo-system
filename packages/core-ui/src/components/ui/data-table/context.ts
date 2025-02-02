import { useReactTable } from '@tanstack/react-table';
import * as React from 'react';

import type { LanguageOption } from '@/lib/intl';

type ContextState = {
  table: ReturnType<typeof useReactTable<any>>;
  language: LanguageOption;
};

export const DataTableContext = React.createContext<ContextState>(
  {} as ContextState
);
