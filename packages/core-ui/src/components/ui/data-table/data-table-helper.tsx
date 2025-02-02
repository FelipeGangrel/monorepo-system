import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import { Checkbox } from '@/components/ui/checkbox';

class DataTableHelper<TData = any> {
  public buildSelectionByPageColumn(): ColumnDef<TData> {
    return {
      id: 'selection',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableHiding: false,
      enableSorting: false,
    };
  }

  public buildSelectionByAllColumn(): ColumnDef<TData> {
    return {
      id: 'selection',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllRowsSelected() ||
            (table.getIsSomeRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableHiding: false,
      enableSorting: false,
    };
  }
}

export { DataTableHelper };
