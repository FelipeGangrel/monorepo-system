import { Label } from '@felipegangrel/core-ui';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

import { cn } from '@/lib/utils';

import {
  FormComponent,
  FormControlProps,
  FormControlRef,
  FormDescriptionProps,
  FormDescriptionRef,
  FormItemProps,
  FormItemRef,
  FormLabelProps,
  FormLabelRef,
  FormMessageProps,
  FormMessageRef,
} from './types';

const Form = FormProvider as FormComponent;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

Form.Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
Form.Field.displayName = 'Form.Field';

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

Form.Item = React.forwardRef<FormItemRef, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('rhf-space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
Form.Item.displayName = 'Form.Item';

Form.Label = React.forwardRef<FormLabelRef, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        ref={ref}
        className={cn(error && 'rhf-text-destructive', className)}
        htmlFor={formItemId}
        {...props}
      />
    );
  }
);
Form.Label.displayName = 'Form.Label';

Form.Control = React.forwardRef<FormControlRef, FormControlProps>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);
Form.Control.displayName = 'Form.Control';

Form.Description = React.forwardRef<FormDescriptionRef, FormDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn('rhf-text-[0.8rem] rhf-text-muted-foreground', className)}
        {...props}
      />
    );
  }
);
Form.Description.displayName = 'Form.Description';

Form.Message = React.forwardRef<FormMessageRef, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn(
          'rhf-text-[0.8rem] rhf-font-medium rhf-text-destructive',
          className
        )}
        {...props}
      >
        {body}
      </p>
    );
  }
);
Form.Message.displayName = 'Form.Message';

export { Form, useFormField };
