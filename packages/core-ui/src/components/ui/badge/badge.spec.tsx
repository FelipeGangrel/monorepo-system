import { render, screen } from '@testing-library/react';

import { Badge } from './badge';

describe('Badge component', () => {
  it('should render its child', () => {
    render(<Badge>Badge</Badge>);

    // Query the DOM for the rendered child element with text "Badge"
    const badge = screen.getByText(/badge/i);
    expect(badge).toBeInTheDocument();
  });
});
