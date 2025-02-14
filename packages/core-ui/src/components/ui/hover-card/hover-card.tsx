import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '#/lib/utils';

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
      className={cn('core-fill-popover', className)}
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
      'core-z-50 core-w-64 core-rounded-md core-border core-bg-popover core-p-4 core-text-popover-foreground core-shadow-md core-outline-none data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
HoverCard.Content.displayName = 'HoverCard.Content';

export { HoverCard };
