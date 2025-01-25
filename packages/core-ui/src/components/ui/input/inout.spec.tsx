import { render, screen } from '@testing-library/react';
import React from 'react';

import { Input } from './input';

describe('Input Component', () => {
  it('renders an input element with default class names', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('applies a custom className', () => {
    const customClass = 'custom-class';
    render(<Input className={customClass} />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass(customClass);
  });

  it('forwards props to the input element', () => {
    render(<Input data-testid="custom-input" placeholder="Enter text" />);

    const input = screen.getByTestId('custom-input');

    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('forwards the ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('renders the input element as disabled', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
  });
});
