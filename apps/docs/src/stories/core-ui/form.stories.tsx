import {
  Button,
  Calendar,
  Checkbox,
  Form,
  Input,
  Label,
  Popover,
  Select,
  Switch,
} from '@felipegangrel/core-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta } from '@storybook/react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

/**
 * Building forms with React Hook Form and Zod.
 */
const meta: Meta<typeof Form> = {
  title: 'core-ui/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
};

export default meta;

export const WithValidation = () => {
  const formSchema = z.object({
    populatedInput: z.string().optional(),
    requiredInput: z.string().min(1, {
      message: 'Please enter a value',
    }),
    select: z.string().optional(),
    multipleCheckbox: z.array(z.string()).optional(),
    switch: z.boolean(),
    date: z.date().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      populatedInput: 'some default value',
      requiredInput: '',
      select: '',
      multipleCheckbox: [],
      switch: false,
      date: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    alert('Submitted value: ' + JSON.stringify(data));
  };

  return (
    <div className="docs-w-screen docs-max-w-[400px]">
      <Form {...form}>
        <form
          className="docs-flex docs-flex-col docs-gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form.Field
            control={form.control}
            name="populatedInput"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Populated input</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="requiredInput"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Required input</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="select"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Select</Form.Label>
                <Select {...field} onValueChange={field.onChange}>
                  <Select.Trigger>
                    <Select.Value placeholder="Select an option" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="Vite">Vite</Select.Item>
                    <Select.Item value="NextJS">NextJS</Select.Item>
                    <Select.Item value="CRA" disabled>
                      Create React APP
                    </Select.Item>
                  </Select.Content>
                </Select>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="multipleCheckbox"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Checkbox</Form.Label>
                {['web', 'mobile', 'desktop'].map((value) => (
                  <Label
                    key={value}
                    className="docs-flex docs-items-center docs-gap-2 docs-font-normal"
                  >
                    <Checkbox
                      id={`${field.name}-${value}`}
                      name={`${field.name}[]`}
                      checked={(field.value as string[])?.includes(value)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...((field.value as string[]) || []), value]
                          : ((field.value as string[]) || []).filter(
                              (v) => v !== value
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <span>{value}</span>
                  </Label>
                ))}
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="date"
            render={({ field }) => (
              <Form.Item className="docs-flex docs-flex-col docs-gap-2">
                <Form.Label>Date of birth</Form.Label>
                <Popover>
                  <Popover.Trigger asChild>
                    <Form.Control>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'docs-pl-3 docs-text-left docs-font-normal',
                          !field.value && 'docs-text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="docs-ml-auto docs-h-4 docs-w-4 docs-opacity-50" />
                      </Button>
                    </Form.Control>
                  </Popover.Trigger>
                  <Popover.Content
                    className="docs-w-auto docs-p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </Popover.Content>
                </Popover>
                <Form.Description>
                  Your date of birth is used to calculate your age.
                </Form.Description>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="switch"
            render={({ field }) => (
              <Form.Item>
                <Label>Switch</Label>
                <div className="docs-flex docs-items-center docs-gap-2">
                  <span className="docs-w-10">
                    {field.value ? 'ON' : 'OFF'}
                  </span>
                  <Switch
                    value="on"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Button type="reset" variant="secondary" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
