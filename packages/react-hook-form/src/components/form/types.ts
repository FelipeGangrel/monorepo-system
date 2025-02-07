import { Label } from '@felipegangrel/core-ui';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { JSX } from 'react';
import {
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
} from 'react-hook-form';

export type FormItemRef = HTMLDivElement;
export type FormItemProps = React.HTMLAttributes<HTMLDivElement>;

export type FormLabelRef = React.ComponentRef<typeof Label>;
export type FormLabelProps = React.ComponentPropsWithoutRef<typeof Label>;

export type FormControlRef = React.ComponentRef<typeof Slot>;
export type FormControlProps = React.ComponentPropsWithoutRef<typeof Slot>;

export type FormDescriptionRef = HTMLParagraphElement;
export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export type FormMessageRef = HTMLParagraphElement;
export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement>;

type FormFieldProps = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
) => JSX.Element;

export type FormComponent = typeof FormProvider & {
  Field: FormFieldProps & { displayName?: string };
  Item: React.ForwardRefExoticComponent<
    FormItemProps & React.RefAttributes<FormItemRef>
  >;
  Label: React.ForwardRefExoticComponent<
    FormLabelProps & React.RefAttributes<FormLabelRef>
  >;
  Control: React.ForwardRefExoticComponent<
    FormControlProps & React.RefAttributes<FormControlRef>
  >;
  Description: React.ForwardRefExoticComponent<
    FormDescriptionProps & React.RefAttributes<FormDescriptionRef>
  >;
  Message: React.ForwardRefExoticComponent<
    FormMessageProps & React.RefAttributes<FormMessageRef>
  >;
};
