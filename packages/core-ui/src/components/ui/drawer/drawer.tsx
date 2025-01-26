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
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
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
          'bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border',
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" />
        {children}
      </DrawerPrimitive.Content>
    </Drawer.Portal>
  )
);
Drawer.Content.displayName = 'Drawer.Content';

Drawer.Header = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
);
Drawer.Header.displayName = 'Drawer.Header';

Drawer.Footer = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
Drawer.Footer.displayName = 'Drawer.Footer';

Drawer.Title = React.forwardRef<DrawerTitleRef, DrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
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
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
Drawer.Description.displayName = 'Drawer.Description';

export { Drawer };
