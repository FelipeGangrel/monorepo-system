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
        'core-fixed core-inset-0 core-z-50 core-bg-black/80 core- data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0',
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
          'core-fixed core-left-[50%] core-top-[50%] core-z-50 core-grid core-w-full core-max-w-lg core-translate-x-[-50%] core-translate-y-[-50%] core-gap-4 core-border core-bg-background core-p-6 core-shadow-lg core-duration-200 data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[state=closed]:core-slide-out-to-left-1/2 data-[state=closed]:core-slide-out-to-top-[48%] data-[state=open]:core-slide-in-from-left-1/2 data-[state=open]:core-slide-in-from-top-[48%] sm:core-rounded-lg',
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="core-absolute core-right-4 core-top-4 core-rounded-sm core-opacity-70 core-ring-offset-background core-transition-opacity hover:core-opacity-100 focus:core-outline-none focus:core-ring-2 focus:core-ring-ring focus:core-ring-offset-2 disabled:core-pointer-events-none data-[state=open]:core-bg-accent data-[state=open]:core-text-muted-foreground">
          <X className="core-h-4 core-w-4" />
          <span className="core-sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </Dialog.Portal>
  )
);
Dialog.Content.displayName = 'Dialog.Content';

Dialog.Header = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn(
      'core-flex core-flex-col core-space-y-1.5 core-text-center sm:core-text-left',
      className
    )}
    {...props}
  />
);
Dialog.Header.displayName = 'Dialog.Header';

Dialog.Footer = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn(
      'core-flex core-flex-col-reverse sm:core-flex-row sm:core-justify-end sm:core-space-x-2',
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
        'core-text-lg core-font-semibold core-leading-none core-tracking-tight',
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
    className={cn('core-text-sm core-text-muted-foreground', className)}
    {...props}
  />
));
Dialog.Description.displayName = 'Dialog.Description';

export { Dialog };
