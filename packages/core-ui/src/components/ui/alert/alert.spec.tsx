import { render, screen } from '@testing-library/react';

import { Alert } from './alert';

describe('Alert component', () => {
  it('should render the AlertRoot with default styles', () => {
    render(<Alert>Default Alert</Alert>);
    const alertRoot = screen.getByRole('alert');

    expect(alertRoot).toBeInTheDocument();
    expect(alertRoot).toHaveClass(
      'relative w-full rounded-lg border px-4 py-3 text-sm'
    );
    expect(alertRoot).toHaveTextContent('Default Alert');
  });

  it('should apply the destructive variant styles', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>);
    const alertRoot = screen.getByRole('alert');

    expect(alertRoot).toBeInTheDocument();
    expect(alertRoot).toHaveClass(
      'border-destructive/50 text-destructive dark:border-destructive'
    );
    expect(alertRoot).toHaveTextContent('Destructive Alert');
  });

  it('should render the AlertTitle with appropriate classes', () => {
    render(<Alert.Title>Alert Title</Alert.Title>);
    const alertTitle = screen.getByText('Alert Title');

    expect(alertTitle).toBeInTheDocument();
    expect(alertTitle).toHaveClass(
      'mb-1 font-medium leading-none tracking-tight'
    );
  });

  it('should render the AlertDescription with appropriate classes', () => {
    render(<Alert.Description>Alert Description</Alert.Description>);
    const alertDescription = screen.getByText('Alert Description');

    expect(alertDescription).toBeInTheDocument();
    expect(alertDescription).toHaveClass('text-sm [&_p]:leading-relaxed');
  });

  it('should allow custom classNames for AlertRoot', () => {
    render(<Alert className="custom-class">Custom Styled Alert</Alert>);
    const alertRoot = screen.getByRole('alert');

    expect(alertRoot).toBeInTheDocument();
    expect(alertRoot).toHaveClass('custom-class');
  });

  it('should allow custom classNames for AlertTitle', () => {
    render(
      <Alert.Title className="custom-title-class">Custom Title</Alert.Title>
    );
    const alertTitle = screen.getByText('Custom Title');

    expect(alertTitle).toBeInTheDocument();
    expect(alertTitle).toHaveClass('custom-title-class');
  });

  it('should allow custom classNames for AlertDescription', () => {
    render(
      <Alert.Description className="custom-description-class">
        Custom Description
      </Alert.Description>
    );
    const alertDescription = screen.getByText('Custom Description');

    expect(alertDescription).toBeInTheDocument();
    expect(alertDescription).toHaveClass('custom-description-class');
  });

  it("should render the AlertRoot with provided role 'alert'", () => {
    render(<Alert>Alert with Role</Alert>);
    const alertRoot = screen.getByRole('alert');

    expect(alertRoot).toBeInTheDocument();
    expect(alertRoot).toHaveAttribute('role', 'alert');
  });

  it('should support additional HTML attributes on AlertRoot', () => {
    render(
      <Alert id="alert-id" data-testid="custom-alert">
        Custom Attributes
      </Alert>
    );
    const alertRoot = screen.getByTestId('custom-alert');

    expect(alertRoot).toBeInTheDocument();
    expect(alertRoot).toHaveAttribute('id', 'alert-id');
  });
});
