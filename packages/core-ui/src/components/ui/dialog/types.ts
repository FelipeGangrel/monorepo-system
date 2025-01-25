import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';

export type DialogOverlayRef = React.ComponentRef<
  typeof DialogPrimitive.Overlay
>;
export type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export type DialogContentRef = React.ComponentRef<
  typeof DialogPrimitive.Content
>;
export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export type DialogTitleRef = React.ComponentRef<typeof DialogPrimitive.Title>;
export type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export type DialogDescriptionRef = React.ComponentRef<
  typeof DialogPrimitive.Description
>;
export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export type DialogComponent = typeof DialogPrimitive.Root & {
  Trigger: typeof DialogPrimitive.Trigger;
  Portal: typeof DialogPrimitive.Portal;
  Close: typeof DialogPrimitive.Close;
  Overlay: React.ForwardRefExoticComponent<
    DialogOverlayProps & React.RefAttributes<DialogOverlayRef>
  >;
  Content: React.ForwardRefExoticComponent<
    DialogContentProps & React.RefAttributes<DialogContentRef>
  >;
  Header: React.FunctionComponent<DialogHeaderProps>;
  Footer: React.FunctionComponent<DialogFooterProps>;
  Title: React.ForwardRefExoticComponent<
    DialogTitleProps & React.RefAttributes<DialogTitleRef>
  >;
  Description: React.ForwardRefExoticComponent<
    DialogDescriptionProps & React.RefAttributes<DialogDescriptionRef>
  >;
};
