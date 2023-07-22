import { render, screen } from '@testing-library/react';
import Header from '../index';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Podcaster/i);
    expect(linkElement).toBeInTheDocument();
  });
  }
);

