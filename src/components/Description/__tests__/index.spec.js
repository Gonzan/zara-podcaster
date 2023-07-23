import { render, screen } from '@testing-library/react';
import Description from '../index';

describe('Description', () => {
  test('renders the title, subtitle, and description correctly', () => {
    const title = 'Main Title';
    const subtitle = 'Subtitle';
    const description = 'This is a description.';

    render(<Description title={title} subtitle={subtitle} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: title })).toHaveClass('title');

    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: subtitle })).toHaveClass('subtitle');

    // Verificar que la descripción se renderice correctamente
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(description)).toHaveClass('description');
  });

  test('does not render the title, subtitle, or description when not provided', () => {
    render(<Description />);

    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.queryByText('Subtitle')).toBeNull();
    expect(screen.queryByText('This is a description.')).toBeNull();
  });
});