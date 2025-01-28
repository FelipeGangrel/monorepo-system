import { InputOTP, InputOTPPattern } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { MinusIcon } from 'lucide-react';

const meta: Meta<typeof InputOTP> = {
  title: 'core-ui/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
    children: (
      <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
    ),
  },
};

export const OnlyDigits: Story = {
  args: {
    maxLength: 6,
    pattern: InputOTPPattern.REGEXP_ONLY_DIGITS,
    children: (
      <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
    ),
  },
};

export const CustomSeparator: Story = {
  args: {
    maxLength: 6,
    children: (
      <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator>
          <MinusIcon />
        </InputOTP.Separator>
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
    ),
  },
};
