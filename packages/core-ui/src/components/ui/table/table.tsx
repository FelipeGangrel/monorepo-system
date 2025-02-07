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
    <div className="core-relative core-w-full core-overflow-auto">
      <table
        ref={ref}
        className={cn(
          'core-w-full core-caption-bottom core-text-sm',
          className
        )}
        {...props}
      />
    </div>
  )
) as TableComponent;
Table.displayName = 'Table';

Table.Header = React.forwardRef<TableHeaderRef, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn('[&_tr]:core-border-b', className)}
      {...props}
    />
  )
);
Table.Header.displayName = 'Table..Header';

Table.Body = React.forwardRef<TableBodyRef, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:core-border-0', className)}
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
        'core-border-t core-bg-muted/50 core-font-medium [&>tr]:last:core-border-b-0',
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
        'core-border-b core-transition-colors hover:core-bg-muted/50 data-[state=selected]:core-bg-muted',
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
        'core-h-10 core-px-2 core-text-left core-align-middle core-font-medium core-text-muted-foreground [&:has([role=checkbox])]:core-pr-0 [&>[role=checkbox]]:core-translate-y-[2px]',
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
        'core-p-2 core-align-middle [&:has([role=checkbox])]:core-pr-0 [&>[role=checkbox]]:core-translate-y-[2px]',
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
      className={cn(
        'core-mt-4 core-text-sm core-text-muted-foreground',
        className
      )}
      {...props}
    />
  )
);
Table.Caption.displayName = 'Table.Caption';

export { Table };
