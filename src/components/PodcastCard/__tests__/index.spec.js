import { render, screen } from '@testing-library/react';
import PodcastCard from '../index';
import { podcastMock } from '../../../test/mock';

describe('PodcastCard', () => {
  test('renders PodcastCard component', () => {
    render(<PodcastCard
      imageUrl={podcastMock.imageUrl}
      title={podcastMock.title}
      author={podcastMock.author}
    />);
    const PodcastCardElement = screen.getByText(/Podcast Title/i);
    expect(PodcastCardElement).toBeInTheDocument();
  });

  test('renders PodcastCard with author', () => {
    render(<PodcastCard
      imageUrl={podcastMock.imageUrl}
      title={podcastMock.title}
      author={podcastMock.author}
    />);
    const PodcastCardElement = screen.getByText(/Podcast Author/i);
    expect(PodcastCardElement).toBeInTheDocument();
  });

  test('renders PodcastCard with image', () => {
    render(<PodcastCard
      imageUrl={podcastMock.imageUrl}
      title={podcastMock.title}
      author={podcastMock.author}
    />);

    const PodcastCardElement = screen.getByRole('img');
    expect(PodcastCardElement).toBeInTheDocument();
    expect(PodcastCardElement).toHaveAttribute('src', expect.stringContaining('mza_16091018887573148747.jpg'));
    expect(PodcastCardElement).toHaveAttribute('alt', 'Podcast');
   });
}
);
