import { render } from '@testing-library/react';

import { Avatar } from './avatar';

describe('Avatar Component', () => {
  it('should pass additional classes to AvatarRoot', () => {
    const additionalClass = 'custom-class';
    const { container } = render(<Avatar.Root className={additionalClass} />);
    const rootElement = container.firstChild;

    expect(rootElement).toHaveClass(additionalClass);
  });

  it('should render AvatarFallback', () => {
    const { getByText } = render(
      <Avatar.Root>
        <Avatar.Fallback>Fallback Text</Avatar.Fallback>
      </Avatar.Root>
    );

    const fallbackElement = getByText('Fallback Text');

    expect(fallbackElement).toBeInTheDocument();
  });
});
