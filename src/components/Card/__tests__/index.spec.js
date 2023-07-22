import { render, screen } from '@testing-library/react';
import Card from '../index';

describe('Card', () => {
  test('renders Card with class card', () => {
    render(<Card />);
    const containerElement = screen.getByTestId('card');
    expect(containerElement).toBeInTheDocument();
  });
  }
);

