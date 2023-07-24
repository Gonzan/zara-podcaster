export const podcastMock = {
  imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
  title: 'Podcast Title',
  author: 'Podcast Author',
  date: '2021-01-01',
  description: 'Podcast Description',
  subtitle: 'Podcast Subtitle',
};

export const podcastHighlightMock = {
  imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
  title: 'Podcast Title',
  author: 'Podcast Author',
  summary: 'Podcast Summary',
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
    "id": 1460157002,
    "title": "Million Dollaz Worth Of Game",
    "date": "17/7/2024",
    "duration": "0:4.035"
  },
  {
    "id": 1460157003,
    "title": "Million Dollaz Worth Of Game 2",
    "date": "17/7/2023",
    "duration": "0:4.037"
  }
];

export const filteredPodcastMock = [
  {
    id: "1535809341",
    summary: "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    title: "The Joe Budden Podcast",
    author: "The Joe Budden Network"
  },
  {
    id: "1460157002",
    summary: "The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame",
    imageUrl: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
    title: "Million Dollaz Worth Of Game",
    author: "Barstool Sports"
  }
];
