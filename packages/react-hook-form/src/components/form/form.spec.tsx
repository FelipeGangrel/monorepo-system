import { Input } from '@felipegangrel/core-ui';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from './form';

const FormWrapper = ({ children }: { readonly children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      testInput: '',
    },
  });

  return <Form {...methods}>{children}</Form>;
};

describe('Form component', () => {
  it('renders the Form.Item component with its children', () => {
    render(
      <FormWrapper>
        <Form.Item>
          <p>Test Content</p>
        </Form.Item>
      </FormWrapper>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the Form.Label and associates it correctly with Form.Control', () => {
    render(
      <FormWrapper>
        <Form.Item>
          <Form.Label>Test Label</Form.Label>
          <Form.Control>
            <Input />
          </Form.Control>
        </Form.Item>
      </FormWrapper>
    );

    const label = screen.getByText('Test Label');
    const input = screen.getByRole('textbox');

    // Check if the label is associated with the input
    expect(label).toHaveAttribute('for', input.id);
  });

  it('shows error messages when field is invalid', async () => {
    const errorMessage = 'This field is required.';

    const FormWithErrorWrapper = ({
      children,
    }: {
      readonly children: React.ReactNode;
    }) => {
      const methods = useForm({
        defaultValues: {
          testInput: '',
        },
      });

      // Calling setError to test if the error message will show
      React.useEffect(() => {
        methods.setError('testInput', {
          type: 'required',
          message: errorMessage,
        });
      }, [methods]);

      return <Form {...methods}>{children}</Form>;
    };

    render(
      <FormWithErrorWrapper>
        <Form.Field
          name="testInput"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Test Field</Form.Label>
              <Form.Control>
                <Input {...field} />
              </Form.Control>
              {/* Automatically displays error message */}
              <Form.Message />
            </Form.Item>
          )}
        />
      </FormWithErrorWrapper>
    );

    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  it('displays Form.Description when provided', () => {
    render(
      <FormWrapper>
        <Form.Item>
          <Form.Label>Field With Description</Form.Label>
          <Form.Control>
            <Input />
          </Form.Control>
          <Form.Description>Description text goes here</Form.Description>
        </Form.Item>
      </FormWrapper>
    );
    expect(screen.getByText('Description text goes here')).toBeInTheDocument();
  });

  it('handles controlled input with React Hook Form', async () => {
    const user = userEvent.setup(); // Allows for typing simulation

    const TestForm = () => {
      return (
        <FormWrapper>
          <Form.Field
            name="testInput"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Test Input</Form.Label>
                <Form.Control>
                  <Input {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
        </FormWrapper>
      );
    };

    render(<TestForm />);
    const input = screen.getByRole('textbox');

    // Simulate user input
    await user.type(input, 'Hello World');
    expect(input).toHaveValue('Hello World');
  });
});
