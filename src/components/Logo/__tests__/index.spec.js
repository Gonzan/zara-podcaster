import { render, screen } from '@testing-library/react';
import Logo from '../index';

describe('Logo', () => {
    test('renders Logo component', () => {
        render(<Logo />);
        const linkElement = screen.getByText(/Podcaster/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Logo component', () => {
        render(<Logo />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/');
    });
}
);

