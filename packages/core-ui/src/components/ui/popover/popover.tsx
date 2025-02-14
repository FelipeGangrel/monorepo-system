import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import type {
  PopoverArrowProps,
  PopoverArrowRef,
  PopoverComponent,
  PopoverContentProps,
  PopoverContentRef,
} from '#/components/ui/popover/types';
import { cn } from '#/lib/utils';

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
      className={cn('core-fill-popover', className)}
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
          'core-z-50 core-w-72 core-rounded-md core-border core-bg-popover core-p-4 core-text-popover-foreground core-shadow-md core-outline-none data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
Popover.Content.displayName = 'Popover.Content';

export { Popover };
