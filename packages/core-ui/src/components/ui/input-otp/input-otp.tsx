import {
  OTPInput,
  OTPInputContext,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp';
import { DotIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import type {
  InputOTPComponent,
  InputOTPGroupProps,
  InputOTPGroupRef,
  InputOTPProps,
  InputOTPRef,
  InputOTPSeparatorProps,
  InputOTPSeparatorRef,
  InputOTPSlotProps,
  InputOTPSlotRef,
} from './types';

const InputOTP = React.forwardRef<InputOTPRef, InputOTPProps>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName
      )}
      className={cn('disabled:core-cursor-not-allowed', className)}
      {...props}
    />
  )
) as InputOTPComponent;
InputOTP.displayName = 'InputOTP';

InputOTP.Group = React.forwardRef<InputOTPGroupRef, InputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('core-flex core-items-center', className)}
      {...props}
    />
  )
);
InputOTP.Group.displayName = 'InputOTP.Group';

InputOTP.Slot = React.forwardRef<InputOTPSlotRef, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
      <div
        ref={ref}
        className={cn(
          'core-relative core-flex core-h-9 core-w-9 core-items-center core-justify-center core-border-y core-border-r core-border-input core-text-sm core-shadow-sm core-transition-all first:core-rounded-l-md first:core-border-l last:core-rounded-r-md',
          isActive && 'core-z-10 core-ring-1 core-ring-ring',
          className
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="core-pointer-events-none core-absolute core-inset-0 core-flex core-items-center core-justify-center">
            <div className="core-h-4 core-w-px core-animate-caret-blink core-bg-foreground core-duration-1000" />
          </div>
        )}
      </div>
    );
  }
);
InputOTP.Slot.displayName = 'InputOTP.Slot';

InputOTP.Separator = React.forwardRef<
  InputOTPSeparatorRef,
  InputOTPSeparatorProps
>(({ ...props }, ref) => {
  props.children = props?.children ?? <DotIcon />;
  return <div ref={ref} role="separator" {...props} />;
});
InputOTP.Separator.displayName = 'InputOTP.Separator';

const InputOTPPattern = {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
};

export { InputOTP, InputOTPPattern };
