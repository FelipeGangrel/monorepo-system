import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Select } from './select';

describe('Select Component', () => {
  const mockOnChange = jest.fn();

  const renderSelect = (value: string, onChange: (value: string) => void) => {
    render(
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="option1">Option 1</Select.Item>
          <Select.Item value="option2">Option 2</Select.Item>
          <Select.Item value="option3">Option 3</Select.Item>
        </Select.Content>
      </Select.Root>
    );
  };

  it('renders the placeholder and triggers correctly', () => {
    renderSelect('', mockOnChange);

    expect(screen.getByText('Select an option')).toBeInTheDocument();

    const trigger = screen.getByRole('combobox');

    fireEvent.click(trigger);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', async () => {
    renderSelect('', mockOnChange);

    const trigger = screen.getByRole('combobox');

    fireEvent.click(trigger);

    fireEvent.click(screen.getByText('Option 2'));

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith('option2');
    });
  });

  it('renders the correct value when an option is selected', () => {
    renderSelect('option1', mockOnChange);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles re-renders when the value prop changes', () => {
    const { rerender } = render(
      <Select.Root value="option1" onValueChange={mockOnChange}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="option1">Option 1</Select.Item>
          <Select.Item value="option2">Option 2</Select.Item>
          <Select.Item value="option3">Option 3</Select.Item>
        </Select.Content>
      </Select.Root>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();

    rerender(
      <Select.Root value="option3" onValueChange={mockOnChange}>
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="option1">Option 1</Select.Item>
          <Select.Item value="option2">Option 2</Select.Item>
          <Select.Item value="option3">Option 3</Select.Item>
        </Select.Content>
      </Select.Root>
    );

    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders without crashing when no initial value is provided', () => {
    renderSelect('', mockOnChange);

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
