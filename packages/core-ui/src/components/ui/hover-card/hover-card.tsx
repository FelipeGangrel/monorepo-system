import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  HoverCardArrowProps,
  HoverCardArrowRef,
  HoverCardComponent,
  HoverCardContentProps,
  HoverCardContentRef,
} from './types';

const HoverCard = HoverCardPrimitive.Root as HoverCardComponent;
HoverCard.displayName = 'HoverCard';

HoverCard.Trigger = HoverCardPrimitive.Trigger;
HoverCard.Trigger.displayName = 'HoverCard.Trigger';

HoverCard.Arrow = React.forwardRef<HoverCardArrowRef, HoverCardArrowProps>(
  ({ className, ...props }, ref) => (
    <HoverCardPrimitive.Arrow
      ref={ref}
      className={cn('fill-popover', className)}
      {...props}
    />
  )
);
HoverCard.Arrow.displayName = 'HoverCard.Arrow';

HoverCard.Content = React.forwardRef<
  HoverCardContentRef,
  HoverCardContentProps
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none',
      className
    )}
    {...props}
  />
));
HoverCard.Content.displayName = 'HoverCard.Content';

export { HoverCard };
