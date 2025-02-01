import { useReactTable } from '@tanstack/react-table';
import * as React from 'react';

export const DataTableContext = React.createContext<
  ReturnType<typeof useReactTable<any>>
>({} as any);
