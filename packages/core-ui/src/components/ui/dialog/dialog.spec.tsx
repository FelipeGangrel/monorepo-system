import { fireEvent, render, screen } from '@testing-library/react';

import { Dialog } from './dialog';

describe('Dialog component', () => {
  it('renders the DialogTrigger and opens the dialog when clicked', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is a dialog description.</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    const trigger = screen.getByText(/open dialog/i);
    expect(trigger).toBeInTheDocument();

    expect(screen.queryByText(/dialog title/i)).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(screen.getByText(/dialog title/i)).toBeInTheDocument();
    expect(
      screen.getByText(/this is a dialog description/i)
    ).toBeInTheDocument();
  });

  it('closes the dialog when the close button is clicked', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is a dialog description.</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    const trigger = screen.getByText(/open dialog/i);
    fireEvent.click(trigger);

    expect(screen.getByText(/dialog title/i)).toBeInTheDocument();

    const closeButton = screen.getByRole('button', {
      name: /close/i,
    });

    fireEvent.click(closeButton);

    expect(screen.queryByText(/dialog title/i)).not.toBeInTheDocument();
  });

  it('renders DialogHeader and DialogFooter correctly', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <h2>Dialog Header Content</h2>
          </Dialog.Header>
          <Dialog.Footer>
            <button>Footer Button</button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );

    const triggerButton = screen.getByText(/open dialog/i);
    fireEvent.click(triggerButton);

    expect(screen.getByText(/dialog header content/i)).toBeInTheDocument();
    expect(screen.getByText(/footer button/i)).toBeInTheDocument();
  });

  it('applies custom classes to dialog components', () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Content className="custom-content-class">
          <Dialog.Title>Test Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    const triggerButton = screen.getByText(/open dialog/i);
    fireEvent.click(triggerButton);

    expect(screen.getByRole('dialog')).toHaveClass('custom-content-class');
  });

  it('renders DialogTitle and DialogDescription with proper text', () => {
    render(
      <Dialog open>
        <Dialog.Content>
          <Dialog.Title>Test Dialog Title</Dialog.Title>
          <Dialog.Description>Test Dialog Description</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByText(/test dialog title/i)).toBeInTheDocument();
    expect(screen.getByText(/test dialog description/i)).toBeInTheDocument();
  });
});
