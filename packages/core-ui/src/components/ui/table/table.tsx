import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  TableBodyProps,
  TableBodyRef,
  TableCaptionProps,
  TableCaptionRef,
  TableCellProps,
  TableCellRef,
  TableComponent,
  TableFooterProps,
  TableFooterRef,
  TableHeaderProps,
  TableHeaderRef,
  TableHeadProps,
  TableHeadRef,
  TableProps,
  TableRef,
  TableRowProps,
  TableRowRef,
} from './types';

const Table = React.forwardRef<TableRef, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
) as TableComponent;
Table.displayName = 'Table';

Table.Header = React.forwardRef<TableHeaderRef, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  )
);
Table.Header.displayName = 'Table..Header';

Table.Body = React.forwardRef<TableBodyRef, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
);
Table.Body.displayName = 'Table.Body';

Table.Footer = React.forwardRef<TableFooterRef, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  )
);
Table.Footer.displayName = 'Table.Footer';

Table.Row = React.forwardRef<TableRowRef, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className
      )}
      {...props}
    />
  )
);
Table.Row.displayName = 'Table.Row';

Table.Head = React.forwardRef<TableHeadRef, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
);
Table.Head.displayName = 'Table.Head';

Table.Cell = React.forwardRef<TableCellRef, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
);
Table.Cell.displayName = 'Table.Cell';

Table.Caption = React.forwardRef<TableCaptionRef, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
);
Table.Caption.displayName = 'Table.Caption';

export { Table };
