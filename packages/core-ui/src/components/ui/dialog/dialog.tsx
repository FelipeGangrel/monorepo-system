import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  DialogComponent,
  DialogContentProps,
  DialogContentRef,
  DialogDescriptionProps,
  DialogDescriptionRef,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogOverlayRef,
  DialogTitleProps,
  DialogTitleRef,
} from './types';

const Dialog = DialogPrimitive.Root as DialogComponent;
Dialog.displayName = 'Dialog';

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Trigger.displayName = 'Dialog.Trigger';

Dialog.Portal = DialogPrimitive.Portal;
Dialog.Portal.displayName = 'Dialog.Portal';

Dialog.Close = DialogPrimitive.Close;
Dialog.Close.displayName = 'Dialog.Close';

Dialog.Overlay = React.forwardRef<DialogOverlayRef, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
        className
      )}
      {...props}
    />
  )
);
Dialog.Overlay.displayName = 'Dialog.Overlay';

Dialog.Content = React.forwardRef<DialogContentRef, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <Dialog.Portal>
      <Dialog.Overlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </Dialog.Portal>
  )
);
Dialog.Content.displayName = 'Dialog.Content';

Dialog.Header = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
Dialog.Header.displayName = 'Dialog.Header';

Dialog.Footer = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
Dialog.Footer.displayName = 'Dialog.Footer';

Dialog.Title = React.forwardRef<DialogTitleRef, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
);
Dialog.Title.displayName = 'Dialog.Title';

Dialog.Description = React.forwardRef<
  DialogDescriptionRef,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
Dialog.Description.displayName = 'Dialog.Description';

export { Dialog };
