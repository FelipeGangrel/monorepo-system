import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  BreadcrumbComponent,
  BreadcrumbEllipsisProps,
  BreadcrumbItemProps,
  BreadcrumbItemRef,
  BreadcrumbLinkProps,
  BreadcrumbLinkRef,
  BreadcrumbListProps,
  BreadcrumbListRef,
  BreadcrumbPageProps,
  BreadcrumbPageRef,
  BreadcrumbProps,
  BreadcrumbRef,
  BreadcrumbSeparatorProps,
} from './types';

const Breadcrumb = React.forwardRef<BreadcrumbRef, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
) as BreadcrumbComponent;
Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.List = React.forwardRef<BreadcrumbListRef, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
);
Breadcrumb.List.displayName = 'Breadcrumb.List';

Breadcrumb.Item = React.forwardRef<BreadcrumbItemRef, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
);
Breadcrumb.Item.displayName = 'Breadcrumb.Item';

Breadcrumb.Link = React.forwardRef<BreadcrumbLinkRef, BreadcrumbLinkProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';

    return (
      <Comp
        ref={ref}
        className={cn('hover:text-foreground transition-colors', className)}
        {...props}
      />
    );
  }
);
Breadcrumb.Link.displayName = 'Breadcrumb.Link';

Breadcrumb.Page = React.forwardRef<BreadcrumbPageRef, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  )
);
Breadcrumb.Page.displayName = 'BreadcrumbPage';

Breadcrumb.Separator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
Breadcrumb.Separator.displayName = 'Breadcrumb.Separator';

Breadcrumb.Ellipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
Breadcrumb.Ellipsis.displayName = 'Breadcrumb.Ellipsis';

export { Breadcrumb };
