import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

export type AvatarRef = React.ComponentRef<typeof AvatarPrimitive.Root>;
export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;

export type AvatarImageRef = React.ComponentRef<typeof AvatarPrimitive.Image>;
export type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

export type AvatarFallbackRef = React.ComponentRef<
  typeof AvatarPrimitive.Fallback
>;
export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

export type AvatarComponent = React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<AvatarRef>
> & {
  Image: React.ForwardRefExoticComponent<
    AvatarImageProps & React.RefAttributes<AvatarImageRef>
  >;
  Fallback: React.ForwardRefExoticComponent<
    AvatarFallbackProps & React.RefAttributes<AvatarFallbackRef>
  >;
};
