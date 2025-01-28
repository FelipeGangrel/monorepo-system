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
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
) as InputOTPComponent;
InputOTP.displayName = 'InputOTP';

InputOTP.Group = React.forwardRef<InputOTPGroupRef, InputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
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
          'border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
          isActive && 'ring-ring z-10 ring-1',
          className
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
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
