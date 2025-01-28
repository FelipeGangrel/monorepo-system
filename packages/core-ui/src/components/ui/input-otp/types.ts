import { OTPInput } from 'input-otp';
import * as React from 'react';

export type InputOTPRef = React.ComponentRef<typeof OTPInput>;
export type InputOTPProps = React.ComponentProps<typeof OTPInput>;

export type InputOTPGroupRef = React.ComponentRef<'div'>;
export type InputOTPGroupProps = React.ComponentPropsWithoutRef<'div'>;

export type InputOTPSlotRef = React.ComponentRef<'div'>;
export type InputOTPSlotProps = React.ComponentPropsWithoutRef<'div'> & {
  index: number;
};

export type InputOTPSeparatorRef = React.ComponentRef<'div'>;
export type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<'div'>;

export type InputOTPComponent = typeof OTPInput & {
  Group: React.ForwardRefExoticComponent<
    InputOTPGroupProps & React.RefAttributes<InputOTPGroupRef>
  >;
  Slot: React.ForwardRefExoticComponent<
    InputOTPSlotProps & React.RefAttributes<InputOTPSlotRef>
  >;
  Separator: React.ForwardRefExoticComponent<
    InputOTPSeparatorProps & React.RefAttributes<InputOTPSeparatorRef>
  >;
};
