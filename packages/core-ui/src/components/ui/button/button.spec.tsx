import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button component', () => {
  it('should render a text as child', () => {
    render(<Button>Button</Button>);

    // Find an element with the role "button" and the accessible name "Button"
    const button = screen.getByRole('button', {
      name: /button/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('should render a link as child', () => {
    render(
      <Button asChild>
        <a href="https://www.google.com">Go to Google</a>
      </Button>
    );

    // Find an element with the role "link" and the accessible name "Go to Google"
    const link = screen.getByRole('link', {
      name: /go to google/i,
    });

    expect(link).toBeInTheDocument();
  });
});
