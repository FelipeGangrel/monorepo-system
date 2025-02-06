import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  AlertComponent,
  AlertDescriptionProps,
  AlertDescriptionRef,
  AlertProps,
  AlertRef,
  AlertTitleProps,
  AlertTitleRef,
} from './types';
import { alertVariants } from './variants';

const Alert = React.forwardRef<AlertRef, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
) as AlertComponent;
Alert.displayName = 'Alert';

Alert.Title = React.forwardRef<AlertTitleRef, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        'core-mb-1 core-font-medium core-leading-none core-tracking-tight',
        className
      )}
      {...props}
    />
  )
);
Alert.Title.displayName = 'Alert.Title';

Alert.Description = React.forwardRef<
  AlertDescriptionRef,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('core-text-sm [&_p]:core-leading-relaxed', className)}
    {...props}
  />
));
Alert.Description.displayName = 'Alert.Description';

export { Alert };
