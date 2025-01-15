import { Button, Form, Input } from '@felipegangrel/core-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const meta: Meta<typeof Form.Root> = {
  title: 'core-ui/Form',
  component: Form.Root,
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
    populatedField: z.string().optional(),
    optionalField: z.string().optional(),
    requiredField: z.string().min(1, {
      message: 'Please enter a value',
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      populatedField: 'some default value',
      optionalField: '',
      requiredField: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    alert('Submitted value: ' + JSON.stringify(data));
  };

  return (
    <div className="w-screen max-w-[400px]">
      <Form.Root {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form.Field
            control={form.control}
            name="populatedField"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Populated field</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="optionalField"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Optional field</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="requiredField"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Required field</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button type="reset" variant="secondary" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </form>
      </Form.Root>
    </div>
  );
};
