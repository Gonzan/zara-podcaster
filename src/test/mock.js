export const podcastMock = {
  imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
  title: 'Podcast Title',
  author: 'Podcast Author',
  date: '2021-01-01',
  description: 'Podcast Description',
  subtitle: 'Podcast Subtitle',
};

export const PodcastHighlightMock = {
  imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
  title: 'Podcast Title',
  descriptions: [
    {
      title: 'Description Title 1',
      subtitle: 'Description Subtitle 1',
      text: 'Description Text 1',
    },
    {
      title: 'Description Title 2',
      text: 'Description Text 2',
    },
  ],
};

export const podcastsListMock = [
  {
    id: '1',
    imageUrl: podcastMock.imageUrl,
    title: podcastMock.title,
    author: podcastMock.author,
    date: podcastMock.date,
    duration: podcastMock.duration,
  },
  {
    id: '2',
    imageUrl: podcastMock.imageUrl,
    title: podcastMock.title,
    author: podcastMock.author,
    date: podcastMock.date,
    duration: podcastMock.duration,

  },
  {
    id: '3',
    imageUrl: podcastMock.imageUrl,
    title: podcastMock.title,
    author: podcastMock.author,
    date: podcastMock.date,
    duration: podcastMock.duration,
  },
];

export const podcastEpisodesMock = [
  {
    id: '1',
    title: 'Episode 1',
    date: '2023-07-20',
    duration: '30:00',
  },
  {
    id: '2',
    title: 'Episode 2',
    date: '2023-07-21',
    duration: '25:00',
  },
];
