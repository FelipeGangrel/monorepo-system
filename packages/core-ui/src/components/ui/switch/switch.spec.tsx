import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from './switch';

describe('Switch Component', () => {
  it('renders correctly', () => {
    render(<Switch aria-label="Example switch" />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });
    expect(switchElement).toBeInTheDocument();
  });

  it('default state is unchecked', () => {
    render(<Switch aria-label="Example switch" />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('toggles state when clicked', () => {
    render(<Switch aria-label="Example switch" />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-state', 'checked');

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('handles custom classes', () => {
    render(<Switch aria-label="Example switch" className="custom-class" />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });
    expect(switchElement).toHaveClass('custom-class');
  });

  it('is inaccessible when disabled', () => {
    render(<Switch aria-label="Example switch" disabled />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });

    expect(switchElement).toBeDisabled();

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('supports being controlled via props', () => {
    const ControlledSwitch = ({ isChecked }: { isChecked: boolean }) => (
      <Switch
        aria-label="Example switch"
        data-state={isChecked ? 'checked' : 'unchecked'}
      />
    );

    const { rerender } = render(<ControlledSwitch isChecked={false} />);
    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });

    expect(switchElement).toHaveAttribute('data-state', 'unchecked');

    rerender(<ControlledSwitch isChecked={true} />);
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('renders children (Thumb)', () => {
    render(<Switch aria-label="Example switch" />);

    const thumbElement = screen.getByRole('switch').querySelector('.block');
    expect(thumbElement).toBeInTheDocument();
  });

  it('focus outlines are applied correctly', () => {
    render(<Switch aria-label="Example switch" />);

    const switchElement = screen.getByRole('switch', {
      name: /example switch/i,
    });

    switchElement.focus();
    expect(switchElement).toHaveClass('focus-visible:outline-none');
  });
});
