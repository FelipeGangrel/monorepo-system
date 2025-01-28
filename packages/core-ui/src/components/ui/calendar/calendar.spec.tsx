import { render, screen } from '@testing-library/react';

import { Calendar } from './calendar';

describe('Calendar component', () => {
  it('shows navigation buttons', () => {
    render(<Calendar />);
    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('renders "today" with appropriate styles', () => {
    render(<Calendar />);
    const todayCell = screen.getByText(new Date().getDate().toString());

    expect(todayCell).toBeInTheDocument();
    expect(todayCell).toHaveClass('bg-accent');
  });

  it('shows custom classNames for days when provided', () => {
    render(
      <Calendar
        classNames={{
          day: 'custom-day-class',
        }}
      />
    );

    const days = screen.getAllByRole('gridcell', { name: /\d+/ });
    expect(days[0]).toHaveClass('custom-day-class');
  });

  it('renders outside days by default', () => {
    render(<Calendar />);

    const outsideDays = screen
      .getAllByText(/\d+/)
      .filter((element) => element.className.includes('day-outside'));
    expect(outsideDays.length).toBeGreaterThan(0);
  });

  it('does not render outside days when showOutsideDays is false', () => {
    render(<Calendar showOutsideDays={false} />);

    const outsideDays = screen
      .queryAllByText(/\d+/)
      .filter((element) => element.className.includes('day-outside'));
    expect(outsideDays.length).toBe(0);
  });
});
