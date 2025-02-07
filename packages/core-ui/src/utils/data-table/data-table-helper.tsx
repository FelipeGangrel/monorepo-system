import type { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import { Checkbox } from '@/components/ui/checkbox';

class DataTableHelper<TData = any> {
  public buildSelectionByRowColumn(): ColumnDef<TData> {
    return {
      id: 'selection',
      cell: ({ row }) => (
        <div className="core-flex core-h-5 core-w-5 core-items-center core-justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableHiding: false,
      enableSorting: false,
    };
  }

  public buildSelectionByPageColumn(): ColumnDef<TData> {
    return {
      id: 'selection',
      header: ({ table }) => (
        <div className="core-flex core-h-5 core-w-5 core-items-center core-justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all rows on page"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="core-flex core-h-5 core-w-5 core-items-center core-justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableHiding: false,
      enableSorting: false,
    };
  }

  public buildSelectionByTableColumn(): ColumnDef<TData> {
    return {
      id: 'selection',
      header: ({ table }) => (
        <div className="core-flex core-h-5 core-w-5 core-items-center core-justify-center">
          <Checkbox
            checked={
              table.getIsAllRowsSelected() ||
              (table.getIsSomeRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
            aria-label="Select all rows"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="core-flex core-h-5 core-w-5 core-items-center core-justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableHiding: false,
      enableSorting: false,
    };
  }
}

export { DataTableHelper };
