import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '#/lib/utils';

const badgeVariants = cva(
  'core-inline-flex core-items-center core-rounded-md core-border core-px-2.5 core-py-0.5 core-text-xs core-font-semibold core-transition-colors focus:core-outline-none focus:core-ring-2 focus:core-ring-ring focus:core-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'core-border-transparent core-bg-primary core-text-primary-foreground core-shadow hover:core-bg-primary/80',
        secondary:
          'core-border-transparent core-bg-secondary core-text-secondary-foreground hover:core-bg-secondary/80',
        destructive:
          'core-border-transparent core-bg-destructive core-text-destructive-foreground core-shadow hover:core-bg-destructive/80',
        outline: 'core-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
