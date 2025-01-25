import { fireEvent, render, screen } from '@testing-library/react';

import { Popover } from './popover';

describe('Popover Component', () => {
  it('renders Popover without crashing', () => {
    render(
      <Popover>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>This is Popover Content</Popover.Content>
      </Popover>
    );

    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('displays Popover.Content when Popover.Trigger is clicked', () => {
    render(
      <Popover>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content data-testid="popover-content">
          This is Popover Content
        </Popover.Content>
      </Popover>
    );

    const trigger = screen.getByText('Open Popover');

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
    expect(screen.getByTestId('popover-content')).toHaveTextContent(
      'This is Popover Content'
    );
  });

  it('applies custom class names to Popover.Content', () => {
    render(
      <Popover>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content data-testid="popover-content" className="custom-class">
          Custom Content
        </Popover.Content>
      </Popover>
    );

    fireEvent.click(screen.getByText('Open Popover'));

    expect(screen.getByTestId('popover-content')).toHaveClass('custom-class');
  });
});
