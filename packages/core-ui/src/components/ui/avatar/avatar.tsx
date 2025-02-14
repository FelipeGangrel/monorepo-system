import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '#/lib/utils';

import type {
  AvatarComponent,
  AvatarFallbackProps,
  AvatarFallbackRef,
  AvatarImageProps,
  AvatarImageRef,
  AvatarProps,
  AvatarRef,
} from './types';

const Avatar = React.forwardRef<AvatarRef, AvatarProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'core-relative core-flex core-h-10 core-w-10 core-shrink-0 core-overflow-hidden core-rounded-full',
        className
      )}
      {...props}
    />
  )
) as AvatarComponent;
Avatar.displayName = 'Avatar';

Avatar.Image = React.forwardRef<AvatarImageRef, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('core-aspect-square core-h-full core-w-full', className)}
      {...props}
    />
  )
);
Avatar.Image.displayName = 'Avatar.Image';

Avatar.Fallback = React.forwardRef<AvatarFallbackRef, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'core-flex core-h-full core-w-full core-items-center core-justify-center core-rounded-full core-bg-muted',
        className
      )}
      {...props}
    />
  )
);
Avatar.Fallback.displayName = 'Avatar.Fallback';

export { Avatar };
