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
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
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
        'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
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
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
AlertDialog.Header.displayName = 'AlertDialog.Header';

AlertDialog.Footer = ({ className, ...props }: AlertDialogFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
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
    className={cn('text-lg font-semibold', className)}
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
    className={cn('text-muted-foreground text-sm', className)}
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
      'mt-2 sm:mt-0',
      className
    )}
    {...props}
  />
));
AlertDialog.Cancel.displayName = 'AlertDialog.Cancel';

export { AlertDialog };
