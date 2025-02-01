import { useReactTable } from '@tanstack/react-table';
import * as React from 'react';

type ContextState = {
  table: ReturnType<typeof useReactTable<any>>;
};

export const DataTableContext = React.createContext<ContextState>(
  {} as ContextState
);
