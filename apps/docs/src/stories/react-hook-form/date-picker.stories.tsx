import { Button } from '@felipegangrel/core-ui';
import { DatePicker, Form } from '@felipegangrel/react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/**
 * Date picker to be used inside the Form component.
 */
const meta: Meta<typeof DatePicker> = {
  title: 'react-hook-form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    language: { control: 'select', options: ['en', 'pt', 'es', 'de'] },
    clearable: { control: 'boolean' },
  },
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

type Story = StoryObj<typeof DatePicker>;

const Template = (args: React.ComponentProps<typeof DatePicker>) => {
  const formSchema = z.object({
    date: z.date(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
    console.log(data);
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
            name="date"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Date</Form.Label>
                <DatePicker
                  {...args}
                  value={field.value}
                  onChange={field.onChange}
                />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export const Example: Story = {
  args: {
    language: 'en',
    clearable: true,
  },
  render: (args) => <Template {...args} />,
};
