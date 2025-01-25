import { fireEvent, render, screen } from '@testing-library/react';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import { Carousel } from './carousel';

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Carousel Component', () => {
  const mockScrollPrev = jest.fn();
  const mockScrollNext = jest.fn();
  const mockCanScrollPrev = jest.fn();
  const mockCanScrollNext = jest.fn();

  const mockEmblaApi = {
    scrollPrev: mockScrollPrev,
    scrollNext: mockScrollNext,
    canScrollPrev: mockCanScrollPrev,
    canScrollNext: mockCanScrollNext,
    on: jest.fn(),
    off: jest.fn(),
  };

  beforeEach(() => {
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValue([
      jest.fn(),
      mockEmblaApi,
    ]);
    jest.clearAllMocks();
  });

  it('renders the carousel structure correctly', () => {
    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
          <Carousel.Item>Slide 2</Carousel.Item>
        </Carousel.Content>
      </Carousel>
    );

    // check for the carousel region
    const region = screen.getByRole('region');
    expect(region).toBeInTheDocument();
    expect(region).toHaveAttribute('aria-roledescription', 'carousel');

    // Check for slides
    const slides = screen.getAllByRole('group');
    expect(slides).toHaveLength(2); // Ensure we have two slides
    slides.forEach((slide) =>
      expect(slide).toHaveAttribute('aria-roledescription', 'slide')
    );

    // Optional: Check the first slide's content
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('renders the Previous and Next buttons', () => {
    render(
      <Carousel>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    );

    expect(
      screen.getByRole('button', { name: /previous slide/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next slide/i })
    ).toBeInTheDocument();
  });

  it('scrolls to the previous slide when the Previous button is clicked', () => {
    mockCanScrollPrev.mockReturnValue(true);

    render(
      <Carousel>
        <Carousel.Previous />
      </Carousel>
    );

    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    fireEvent.click(prevButton);

    expect(mockScrollPrev).toHaveBeenCalled();
  });

  it('scrolls to the next slide when the Next button is clicked', () => {
    mockCanScrollNext.mockReturnValue(true);

    render(
      <Carousel>
        <Carousel.Next />
      </Carousel>
    );

    const nextButton = screen.getByRole('button', { name: /next slide/i });
    fireEvent.click(nextButton);

    expect(mockScrollNext).toHaveBeenCalled();
  });

  it('disables the Previous button if canScrollPrev is false', () => {
    mockCanScrollPrev.mockReturnValue(false);

    render(
      <Carousel>
        <Carousel.Previous />
      </Carousel>
    );

    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    expect(prevButton).toBeDisabled();
  });

  it('disables the Next button if canScrollNext is false', () => {
    mockCanScrollNext.mockReturnValue(false);

    render(
      <Carousel>
        <Carousel.Next />
      </Carousel>
    );

    const nextButton = screen.getByRole('button', { name: /next slide/i });
    expect(nextButton).toBeDisabled();
  });

  it('handles keyboard navigation for ArrowLeft and ArrowRight keys', () => {
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);

    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
          <Carousel.Item>Slide 2</Carousel.Item>
        </Carousel.Content>
      </Carousel>
    );

    const carouselRegion = screen.getByRole('region');

    fireEvent.keyDown(carouselRegion, { key: 'ArrowLeft' });
    expect(mockScrollPrev).toHaveBeenCalled();

    fireEvent.keyDown(carouselRegion, { key: 'ArrowRight' });
    expect(mockScrollNext).toHaveBeenCalled();
  });
});
