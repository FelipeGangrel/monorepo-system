import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

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
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
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
      className={cn('aspect-square h-full w-full', className)}
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
        'bg-muted flex h-full w-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  )
);
Avatar.Fallback.displayName = 'Avatar.Fallback';

export { Avatar };
