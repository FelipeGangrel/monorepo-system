import * as React from 'react';

import { cn } from '@/lib/utils';

import type { CardComponent } from './types';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'core-rounded-xl core-border core-bg-card core-text-card-foreground core-shadow',
      className
    )}
    {...props}
  />
)) as CardComponent;
Card.displayName = 'Card';

Card.Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'core-flex core-flex-col core-space-y-1.5 core-p-6',
      className
    )}
    {...props}
  />
));
Card.Header.displayName = 'Card.Header';

Card.Title = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'core-font-semibold core-leading-none core-tracking-tight',
      className
    )}
    {...props}
  />
));
Card.Title.displayName = 'Card.Title';

Card.Description = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('core-text-sm core-text-muted-foreground', className)}
    {...props}
  />
));
Card.Description.displayName = 'Card.Description';

Card.Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('core-p-6 core-pt-0', className)} {...props} />
));
Card.Content.displayName = 'Card.Content';

Card.Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('core-flex core-items-center core-p-6 core-pt-0', className)}
    {...props}
  />
));
Card.Footer.displayName = 'Card.Footer';

export { Card };
