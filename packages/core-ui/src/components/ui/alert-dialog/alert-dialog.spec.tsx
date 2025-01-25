import { fireEvent, render, screen } from '@testing-library/react';

import { AlertDialog } from './alert-dialog';

describe('AlertDialog Component', () => {
  const renderComponent = ({
    onConfirm = jest.fn(),
    onCancel = jest.fn(),
  }: {
    onConfirm?: () => void;
    onCancel?: () => void;
  } = {}) => {
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Header>
              <AlertDialog.Title>Alert Title</AlertDialog.Title>
              <AlertDialog.Description>
                Alert Description
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Action onClick={onConfirm}>
                Confirm
              </AlertDialog.Action>
              <AlertDialog.Cancel onClick={onCancel}>Cancel</AlertDialog.Cancel>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    );
  };

  it('should render the AlertDialog content when Trigger is clicked', () => {
    renderComponent();

    // Ensure the dialog is not rendered initially
    expect(screen.queryByText('Alert Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Alert Description')).not.toBeInTheDocument();

    // Click the trigger to open the dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Validate the dialog content becomes visible
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert Description')).toBeInTheDocument();
  });

  it('should close the AlertDialog when the Cancel button is clicked', () => {
    const handleCancel = jest.fn();
    renderComponent({ onCancel: handleCancel });

    // Open the dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Ensure the dialog appears
    expect(screen.getByText('Alert Title')).toBeInTheDocument();

    // Click the Cancel button to close the dialog
    fireEvent.click(screen.getByText('Cancel'));

    // Validate the dialog is closed
    expect(screen.queryByText('Alert Title')).not.toBeInTheDocument();

    // Validate that the cancel handler is called
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });

  it('should focus the Cancel button on opening the AlertDialog', () => {
    renderComponent();

    // Open the dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Validate that the Cancel button is focused
    expect(screen.getByText('Cancel')).toHaveFocus();
  });

  it('should call the confirm action when the Confirm button is clicked', () => {
    const handleConfirm = jest.fn();
    renderComponent({ onConfirm: handleConfirm });

    // Open the dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Click the confirm button
    fireEvent.click(screen.getByText('Confirm'));

    // Validate the confirm callback is called
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  it('should close the AlertDialog when the Escape key is pressed', () => {
    renderComponent();

    // Open the dialog
    fireEvent.click(screen.getByText('Open Dialog'));

    // Ensure the dialog appears
    expect(screen.getByText('Alert Title')).toBeInTheDocument();

    // Simulate pressing the Escape key
    fireEvent.keyDown(document, { key: 'Escape' });

    // Validate the dialog closes
    expect(screen.queryByText('Alert Title')).not.toBeInTheDocument();
  });
});
