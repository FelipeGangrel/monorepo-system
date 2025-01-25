import { render, screen } from '@testing-library/react';

import { Command } from './command';

describe('Command Component', () => {
  it('renders CommandRoot component with default styles and custom class', () => {
    render(<Command className="custom-class">Test Content</Command>);

    const command = screen.getByText('Test Content');
    expect(command).toBeInTheDocument();
    expect(command).toHaveClass('custom-class');
  });

  it('renders CommandShortcut with custom text and className', () => {
    render(
      <Command.Shortcut className="shortcut-class">Ctrl+K</Command.Shortcut>
    );

    const shortcut = screen.getByText('Ctrl+K');
    expect(shortcut).toBeInTheDocument();
    expect(shortcut).toHaveClass('shortcut-class');
  });
});
