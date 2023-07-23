import React from 'react';
import { render, screen } from '@testing-library/react';
import PodcastList from '../index';
import { podcastEpisodesMock, podcastMock } from '../../../test/mock';

describe('PodcastList', () => {
  test('renders the table headers and episode data', () => {
    render(<PodcastList episodes={podcastEpisodesMock} podcast={podcastMock} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();


    podcastEpisodesMock.forEach((episode) => {
      expect(screen.getByText(episode.title)).toBeInTheDocument();
      expect(screen.getByText(episode.date)).toBeInTheDocument();
      expect(screen.getByText(episode.duration)).toBeInTheDocument();
    });
  });

  test('renders the episode links with correct routes', () => {
    render(<PodcastList episodes={podcastEpisodesMock} podcast={podcastMock} />);

    podcastEpisodesMock.forEach((episode) => {
      const podcast = podcastMock;

      const episodeLink = screen.getByText(episode.title);
      expect(episodeLink).toHaveAttribute('href', `/podcast/${podcast.id}/episode/${episode.id}`);
    });
  });
});
