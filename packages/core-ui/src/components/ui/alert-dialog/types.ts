import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';

export type AlertDialogOverlayRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Overlay
>;
export type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>;

export type AlertDialogContentRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Content
>;
export type AlertDialogContentProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>;

export type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export type AlertDialogTitleRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Title
>;
export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;

export type AlertDialogDescriptionRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Description
>;
export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>;

export type AlertDialogActionRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Action
>;
export type AlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
>;

export type AlertDialogCancelRef = React.ComponentRef<
  typeof AlertDialogPrimitive.Cancel
>;
export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>;

export type AlertDialogComponent = typeof AlertDialogPrimitive.Root & {
  Overlay: React.ForwardRefExoticComponent<
    AlertDialogOverlayProps & React.RefAttributes<AlertDialogOverlayRef>
  >;
  Content: React.ForwardRefExoticComponent<
    AlertDialogContentProps & React.RefAttributes<AlertDialogContentRef>
  >;
  Header: React.FunctionComponent<AlertDialogHeaderProps>;
  Footer: React.FunctionComponent<AlertDialogFooterProps>;
  Title: React.ForwardRefExoticComponent<
    AlertDialogTitleProps & React.RefAttributes<AlertDialogTitleRef>
  >;
  Description: React.ForwardRefExoticComponent<
    AlertDialogDescriptionProps & React.RefAttributes<AlertDialogDescriptionRef>
  >;
  Trigger: typeof AlertDialogPrimitive.Trigger;
  Portal: typeof AlertDialogPrimitive.Portal;
  Action: React.ForwardRefExoticComponent<
    AlertDialogActionProps & React.RefAttributes<AlertDialogActionRef>
  >;
  Cancel: React.ForwardRefExoticComponent<
    AlertDialogCancelProps & React.RefAttributes<AlertDialogCancelRef>
  >;
};
