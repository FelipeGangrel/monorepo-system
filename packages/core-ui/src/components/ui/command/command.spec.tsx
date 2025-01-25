import { render, screen } from '@testing-library/react';

import { Command } from './command';

describe('Command Component', () => {
  it('renders CommandRoot component with default styles and custom class', () => {
    render(<Command.Root className="custom-class">Test Content</Command.Root>);

    const commandRoot = screen.getByText('Test Content');
    expect(commandRoot).toBeInTheDocument();
    expect(commandRoot).toHaveClass('custom-class');
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
