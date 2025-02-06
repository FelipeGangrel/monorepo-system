import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import type {
  AlertDialogActionProps,
  AlertDialogActionRef,
  AlertDialogCancelProps,
  AlertDialogCancelRef,
  AlertDialogComponent,
  AlertDialogContentProps,
  AlertDialogContentRef,
  AlertDialogDescriptionProps,
  AlertDialogDescriptionRef,
  AlertDialogFooterProps,
  AlertDialogHeaderProps,
  AlertDialogOverlayProps,
  AlertDialogOverlayRef,
  AlertDialogTitleProps,
  AlertDialogTitleRef,
} from './types';

const AlertDialog = AlertDialogPrimitive.Root as AlertDialogComponent;
AlertDialog.displayName = 'AlertDialog';

AlertDialog.Trigger = AlertDialogPrimitive.Trigger;
AlertDialog.Trigger.displayName = 'AlertDialog.Trigger';

AlertDialog.Portal = AlertDialogPrimitive.Portal;
AlertDialog.Portal.displayName = 'AlertDialog.Portal';

AlertDialog.Overlay = React.forwardRef<
  AlertDialogOverlayRef,
  AlertDialogOverlayProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'core-fixed core-inset-0 core-z-50 core-bg-black/80 data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialog.Overlay.displayName = 'AlertDialog.Overlay';

AlertDialog.Content = React.forwardRef<
  AlertDialogContentRef,
  AlertDialogContentProps
>(({ className, ...props }, ref) => (
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'core-fixed core-left-[50%] core-top-[50%] core-z-50 core-grid core-w-full core-max-w-lg core-translate-x-[-50%] core-translate-y-[-50%] core-gap-4 core-border core-bg-background core-p-6 core-shadow-lg core-duration-200 data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[state=closed]:core-slide-out-to-left-1/2 data-[state=closed]:core-slide-out-to-top-[48%] data-[state=open]:core-slide-in-from-left-1/2 data-[state=open]:core-slide-in-from-top-[48%] sm:core-rounded-lg',
        className
      )}
      {...props}
    />
  </AlertDialog.Portal>
));
AlertDialog.Content.displayName = 'AlertDialog.Content';

AlertDialog.Header = ({ className, ...props }: AlertDialogHeaderProps) => (
  <div
    className={cn(
      'core-flex core-flex-col core-space-y-2 core-text-center sm:core-text-left',
      className
    )}
    {...props}
  />
);
AlertDialog.Header.displayName = 'AlertDialog.Header';

AlertDialog.Footer = ({ className, ...props }: AlertDialogFooterProps) => (
  <div
    className={cn(
      'core-flex core-flex-col-reverse sm:core-flex-row sm:core-justify-end sm:core-space-x-2',
      className
    )}
    {...props}
  />
);
AlertDialog.Footer.displayName = 'AlertDialog.Footer';

AlertDialog.Title = React.forwardRef<
  AlertDialogTitleRef,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('core-text-lg core-font-semibold', className)}
    {...props}
  />
));
AlertDialog.Title.displayName = 'AlertDialog.Title';

AlertDialog.Description = React.forwardRef<
  AlertDialogDescriptionRef,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('core-text-sm core-text-muted-foreground', className)}
    {...props}
  />
));
AlertDialog.Description.displayName = 'AlertDialog.Description';

AlertDialog.Action = React.forwardRef<
  AlertDialogActionRef,
  AlertDialogActionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialog.Action.displayName = 'AlertDialog.Action';

AlertDialog.Cancel = React.forwardRef<
  AlertDialogCancelRef,
  AlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: 'outline' }),
      'core-mt-2 sm:core-mt-0',
      className
    )}
    {...props}
  />
));
AlertDialog.Cancel.displayName = 'AlertDialog.Cancel';

export { AlertDialog };
