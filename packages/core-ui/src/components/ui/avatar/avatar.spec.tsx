import { render } from '@testing-library/react';

import { Avatar } from './avatar';

describe('Avatar component', () => {
  it('should pass additional classes to AvatarRoot', () => {
    const additionalClass = 'custom-class';
    const { container } = render(<Avatar className={additionalClass} />);
    const rootElement = container.firstChild;

    expect(rootElement).toHaveClass(additionalClass);
  });

  it('should render AvatarFallback', () => {
    const { getByText } = render(
      <Avatar>
        <Avatar.Fallback>Fallback Text</Avatar.Fallback>
      </Avatar>
    );

    const fallbackElement = getByText('Fallback Text');

    expect(fallbackElement).toBeInTheDocument();
  });
});
