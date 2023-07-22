import { render, screen } from '@testing-library/react';
import Container from '../index';

describe('Container', () => {
  test('renders Container with class container', () => {
    render(<Container />);
    const containerElement = screen.getByTestId('container');
    expect(containerElement).toBeInTheDocument();
  });
  }
);
