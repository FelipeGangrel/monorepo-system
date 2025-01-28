import { render, screen } from '@testing-library/react';
import React from 'react';

import { Label } from './label';

describe('Label component', () => {
  it('renders the label with default styles', () => {
    render(<Label>Test Label</Label>);

    const label = screen.getByText('Test Label');

    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-sm font-medium leading-none');
  });

  it('applies custom className', () => {
    render(<Label className="custom-class">Test Label</Label>);

    const label = screen.getByText('Test Label');

    expect(label).toHaveClass('custom-class');
  });

  it('forwards props to the underlying LabelPrimitive element', () => {
    render(<Label data-test-id="label-component">Test Label</Label>);

    const label = screen.getByText('Test Label');

    expect(label).toHaveAttribute('data-test-id', 'label-component');
  });

  it('forwards ref to the underlying LabelPrimitive element', () => {
    const ref = React.createRef<HTMLLabelElement>();

    render(<Label ref={ref}>Test Label</Label>);

    const label = screen.getByText('Test Label');

    expect(ref.current).toBe(label);
  });
});
