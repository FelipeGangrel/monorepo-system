import {
  Button,
  Checkbox,
  Form,
  Input,
  Label,
  Select,
  Switch,
} from '@felipegangrel/core-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      populatedInput: 'some default value',
      requiredInput: '',
      select: '',
      multipleCheckbox: [],
      switch: false,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    alert('Submitted value: ' + JSON.stringify(data));
  };

  return (
    <div className="w-screen max-w-[400px]">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
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
                    className="flex items-center gap-2 font-normal"
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
            name="switch"
            render={({ field }) => (
              <Form.Item>
                <Label>Switch</Label>
                <div className="flex items-center gap-2">
                  <span className="w-10">{field.value ? 'ON' : 'OFF'}</span>
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
