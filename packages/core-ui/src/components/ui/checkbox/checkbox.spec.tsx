import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './checkbox';

describe('Checkbox component', () => {
  it('renders the checkbox component', () => {
    render(<Checkbox />);

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('applies custom className when passed', () => {
    const customClass = 'custom-class';
    render(<Checkbox className={customClass} />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveClass(customClass);
  });

  it('calls the onCheckedChange handler when clicked', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox onCheckedChange={handleCheckedChange} />);
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
  });

  it('renders as checked when defaultChecked is true', () => {
    render(<Checkbox defaultChecked />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  it('toggles checked state on click', () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole('checkbox');

    // Initially unchecked
    expect(checkboxElement).not.toBeChecked();

    // Click to check
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();

    // Click to uncheck
    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });

  it('adds disabled styles and blocks interaction when disabled', () => {
    render(<Checkbox disabled />);
    const checkboxElement = screen.getByRole('checkbox');

    // Ensure it's disabled
    expect(checkboxElement).toBeDisabled();

    // Fire a click event and ensure no state change
    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });
});
