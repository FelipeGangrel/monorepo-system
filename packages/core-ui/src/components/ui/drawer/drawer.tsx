import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/lib/utils';

import type {
  DrawerComponent,
  DrawerContentProps,
  DrawerContentRef,
  DrawerDescriptionProps,
  DrawerDescriptionRef,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerOverlayProps,
  DrawerOverlayRef,
  DrawerProps,
  DrawerTitleProps,
  DrawerTitleRef,
} from './types';

const Drawer = Object.assign(
  ({ shouldScaleBackground = true, ...props }: DrawerProps) => (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  ),
  {} as DrawerComponent
);
Drawer.displayName = 'Drawer';

Drawer.Trigger = DrawerPrimitive.Trigger;
Drawer.Trigger.displayName = 'Drawer.Trigger';

Drawer.Portal = DrawerPrimitive.Portal;
Drawer.Portal.displayName = 'Drawer.Portal';

Drawer.Close = DrawerPrimitive.Close;
Drawer.Close.displayName = 'Drawer.Close';

Drawer.Overlay = React.forwardRef<DrawerOverlayRef, DrawerOverlayProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn(
        'core-fixed core-inset-0 core-z-50 core-bg-black/80',
        className
      )}
      {...props}
    />
  )
);
Drawer.Overlay.displayName = 'Drawer.Overlay';

Drawer.Content = React.forwardRef<DrawerContentRef, DrawerContentProps>(
  ({ className, children, ...props }, ref) => (
    <Drawer.Portal>
      <Drawer.Overlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'core-fixed core-inset-x-0 core-bottom-0 core-z-50 core-mt-24 core-flex core-h-auto core-flex-col core-rounded-t-[10px] core-border core-bg-background',
          className
        )}
        {...props}
      >
        <div className="core-mx-auto core-mt-4 core-h-2 core-w-[100px] core-rounded-full core-bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </Drawer.Portal>
  )
);
Drawer.Content.displayName = 'Drawer.Content';

Drawer.Header = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn(
      'core-grid core-gap-1.5 core-p-4 core-text-center sm:core-text-left',
      className
    )}
    {...props}
  />
);
Drawer.Header.displayName = 'Drawer.Header';

Drawer.Footer = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn(
      'core-mt-auto core-flex core-flex-col core-gap-2 core-p-4',
      className
    )}
    {...props}
  />
);
Drawer.Footer.displayName = 'Drawer.Footer';

Drawer.Title = React.forwardRef<DrawerTitleRef, DrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        'core-text-lg core-font-semibold core-leading-none core-tracking-tight',
        className
      )}
      {...props}
    />
  )
);
Drawer.Title.displayName = 'Drawer.Title';

Drawer.Description = React.forwardRef<
  DrawerDescriptionRef,
  DrawerDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('core-text-sm core-text-muted-foreground', className)}
    {...props}
  />
));
Drawer.Description.displayName = 'Drawer.Description';

export { Drawer };
