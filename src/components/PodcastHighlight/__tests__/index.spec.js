import { render, screen } from '@testing-library/react';
import PodcastHighlight from '../index';
import { PodcastHighlightMock } from '../../../test/mock';

describe('PodcastHighlight', () => {
  test('renders the podcast highlight correctly', () => {
    render(<PodcastHighlight {...PodcastHighlightMock} />);

    const podcastImage = screen.getByTestId('podcast-image');
    expect(podcastImage).toBeInTheDocument();
    expect(podcastImage).toHaveAttribute('src', expect.stringContaining('mza_16091018887573148747.jpg'));

    PodcastHighlightMock.descriptions.forEach((description) => {
      const descriptionTitle = screen.getByText(description.title);
      expect(descriptionTitle).toBeInTheDocument();

      if (description.subtitle) {
        const descriptionSubtitle = screen.getByText(description.subtitle);
        expect(descriptionSubtitle).toBeInTheDocument();
      }

      const descriptionText = screen.getByText(description.text);
      expect(descriptionText).toBeInTheDocument();
    });
  });
});
