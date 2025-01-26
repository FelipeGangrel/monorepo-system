import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

export type DrawerOverlayRef = React.ComponentRef<
  typeof DrawerPrimitive.Overlay
>;
export type DrawerOverlayProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Overlay
>;

export type DrawerContentRef = React.ComponentRef<
  typeof DrawerPrimitive.Content
>;
export type DrawerContentProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Content
>;

export type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;

export type DrawerTitleRef = React.ComponentRef<typeof DrawerPrimitive.Title>;
export type DrawerTitleProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Title
>;

export type DrawerDescriptionRef = React.ComponentRef<
  typeof DrawerPrimitive.Description
>;
export type DrawerDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Description
>;

export type DrawerComponent = React.FunctionComponent<DrawerProps> & {
  Trigger: typeof DrawerPrimitive.Trigger;
  Portal: typeof DrawerPrimitive.Portal & { displayName?: string };
  Close: typeof DrawerPrimitive.Close;
  Overlay: React.ForwardRefExoticComponent<
    DrawerOverlayProps & React.RefAttributes<DrawerOverlayRef>
  >;
  Content: React.ForwardRefExoticComponent<
    DrawerContentProps & React.RefAttributes<DrawerContentRef>
  >;
  Header: React.FunctionComponent<DrawerHeaderProps>;
  Footer: React.FunctionComponent<DrawerFooterProps>;
  Title: React.ForwardRefExoticComponent<
    DrawerTitleProps & React.RefAttributes<DrawerTitleRef>
  >;
  Description: React.ForwardRefExoticComponent<
    DrawerDescriptionProps & React.RefAttributes<DrawerDescriptionRef>
  >;
};
