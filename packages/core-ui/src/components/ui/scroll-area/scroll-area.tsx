import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { cn } from '#/lib/utils';

import type {
  ScrollAreaComponent,
  ScrollAreaProps,
  ScrollAreaRef,
  ScrollBarProps,
  ScrollBarRef,
  ScrollBarThumbProps,
  ScrollBarThumbRef,
} from './types';

const ScrollArea = React.forwardRef<ScrollAreaRef, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn('core-relative core-overflow-hidden', className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport className="core-h-full core-w-full core-rounded-[inherit]">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
) as ScrollAreaComponent;
ScrollArea.displayName = 'ScrollArea';

const ScrollBar = React.forwardRef<ScrollBarRef, ScrollBarProps>(
  ({ className, orientation = 'vertical', children, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          'core-flex core-touch-none core-select-none core-transition-colors',
          orientation === 'vertical' &&
            'core-h-full core-w-2.5 core-border-l core-border-l-transparent core-p-[1px]',
          orientation === 'horizontal' &&
            'core-h-2.5 core-flex-col core-border-t core-border-t-transparent core-p-[1px]',
          className
        )}
        {...props}
      >
        {children ?? <ScrollBarThumb />}
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
  }
);
ScrollBar.displayName = 'ScrollArea.ScrollBar';
ScrollArea.ScrollBar = ScrollBar;

const ScrollBarThumb = React.forwardRef<ScrollBarThumbRef, ScrollBarThumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.ScrollAreaThumb
        ref={ref}
        className={cn(
          'core-relative core-flex-1 core-rounded-full core-bg-border',
          className
        )}
        {...props}
      />
    );
  }
);
ScrollBarThumb.displayName = 'ScrollArea.ScrollBarThumb';
ScrollArea.ScrollBarThumb = ScrollBarThumb;

export { ScrollArea };
