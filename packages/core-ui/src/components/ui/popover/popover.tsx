import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import type {
  PopoverArrowProps,
  PopoverArrowRef,
  PopoverComponent,
  PopoverContentProps,
  PopoverContentRef,
} from '@/components/ui/popover/types';
import { cn } from '@/lib/utils';

const Popover = PopoverPrimitive.Root as PopoverComponent;
Popover.displayName = 'Popover';

Popover.Trigger = PopoverPrimitive.Trigger;
Popover.Trigger.displayName = 'Popover.Trigger';

Popover.Anchor = PopoverPrimitive.Anchor;
Popover.Anchor.displayName = 'Popover.Anchor';

Popover.Arrow = React.forwardRef<PopoverArrowRef, PopoverArrowProps>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Arrow
      ref={ref}
      className={cn('fill-popover', className)}
      {...props}
    />
  )
);
Popover.Arrow.displayName = 'Popover.Arrow';

Popover.Close = PopoverPrimitive.Close;
Popover.Close.displayName = 'Popover.Close';

Popover.Content = React.forwardRef<PopoverContentRef, PopoverContentProps>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-none',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
Popover.Content.displayName = 'Popover.Content';

export { Popover };
