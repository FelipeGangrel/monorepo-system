import { render, screen } from '@testing-library/react';

import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb component', () => {
  it('renders Breadcrumb with correct aria-label', () => {
    render(<Breadcrumb data-testid="breadcrumb" />);

    const breadcrumb = screen.getByTestId('breadcrumb');

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveAttribute('aria-label', 'breadcrumb');
  });

  it('renders Breadcrumb.List with provided className', () => {
    render(
      <Breadcrumb.List className="custom-class" data-testid="breadcrumb-list" />
    );

    const breadcrumbList = screen.getByTestId('breadcrumb-list');

    expect(breadcrumbList).toBeInTheDocument();
    expect(breadcrumbList).toHaveClass('custom-class');
  });

  it('renders Breadcrumb.Item properly', () => {
    render(
      <Breadcrumb.Item
        className="breadcrumb-item"
        data-testid="breadcrumb-item"
      >
        Item 1
      </Breadcrumb.Item>
    );

    const breadcrumbItem = screen.getByTestId('breadcrumb-item');

    expect(breadcrumbItem).toBeInTheDocument();
    expect(breadcrumbItem).toHaveClass('breadcrumb-item');
    expect(breadcrumbItem).toHaveTextContent('Item 1');
  });

  it('renders Breadcrumb.Link and checks for link behavior', () => {
    render(
      <Breadcrumb.Link href="/home" data-testid="breadcrumb-link">
        Home
      </Breadcrumb.Link>
    );

    const breadcrumbLink = screen.getByTestId('breadcrumb-link');
    expect(breadcrumbLink).toBeInTheDocument();
    expect(breadcrumbLink).toHaveAttribute('href', '/home');
    expect(breadcrumbLink).toHaveTextContent('Home');
  });

  it('renders Breadcrumb.Link as a Slot component when `asChild` is true', () => {
    render(
      <Breadcrumb.Link asChild data-testid="breadcrumb-slot-link">
        <span>Custom Link</span>
      </Breadcrumb.Link>
    );

    const breadcrumbSlotLink = screen.getByTestId('breadcrumb-slot-link');

    expect(breadcrumbSlotLink).toBeInTheDocument();
    expect(breadcrumbSlotLink.tagName).toBe('SPAN');
    expect(breadcrumbSlotLink).toHaveTextContent('Custom Link');
  });

  it('renders Breadcrumb.Page with aria-current="page"', () => {
    render(
      <Breadcrumb.Page data-testid="breadcrumb-page">
        Current Page
      </Breadcrumb.Page>
    );

    const breadcrumbPage = screen.getByTestId('breadcrumb-page');

    expect(breadcrumbPage).toBeInTheDocument();
    expect(breadcrumbPage).toHaveAttribute('aria-current', 'page');
    expect(breadcrumbPage).toHaveTextContent('Current Page');
  });

  it('renders Breadcrumb.Separator with default ChevronRight icon', () => {
    render(<Breadcrumb.Separator data-testid="breadcrumb-separator" />);

    const breadcrumbSeparator = screen.getByTestId('breadcrumb-separator');

    expect(breadcrumbSeparator).toBeInTheDocument();
    expect(breadcrumbSeparator).toContainHTML('svg');
  });

  it('renders Breadcrumb.Separator with custom children when provided', () => {
    render(
      <Breadcrumb.Separator data-testid="breadcrumb-separator">
        Custom Separator
      </Breadcrumb.Separator>
    );

    const breadcrumbSeparator = screen.getByTestId('breadcrumb-separator');

    expect(breadcrumbSeparator).toBeInTheDocument();
    expect(breadcrumbSeparator).toHaveTextContent('Custom Separator');
  });

  it('renders Breadcrumb.Ellipsis with proper aria-hidden and default icon', () => {
    render(<Breadcrumb.Ellipsis data-testid="breadcrumb-ellipsis" />);

    const breadcrumbEllipsis = screen.getByTestId('breadcrumb-ellipsis');

    expect(breadcrumbEllipsis).toBeInTheDocument();
    expect(breadcrumbEllipsis).toHaveAttribute('aria-hidden', 'true');
    expect(breadcrumbEllipsis).toContainHTML('svg');
  });

  it('ensures all components render correctly together', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Current Page</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
    );

    const breadcrumbRoot = screen.getByRole('navigation', {
      name: 'breadcrumb',
    });
    expect(breadcrumbRoot).toBeInTheDocument();

    const breadcrumbList = screen.getByRole('list');
    expect(breadcrumbList).toBeInTheDocument();

    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(3);

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('Home');
    expect(links[1]).toHaveTextContent('About');

    const currentPage = screen.getByText('Current Page');
    expect(currentPage).toBeInTheDocument();
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });
});
