import { SanitizedPodcasts } from "@/components/FilterSection/types";
import { sanitizePodcastEpisodeList } from "./sanitizePodcastEpisodeList";

export const fetchPodcasts = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    return null;
  }
};

export const savePodcastsToLocalStorage = (podcasts: any, key: string) => {
  const currentDate = new Date().toISOString();
  localStorage.setItem(key, JSON.stringify({ data: podcasts, lastUpdated: currentDate }));
};

export const getPodcastsFromLocalStorage = (key: string) => {
  const localStoragePodcasts = localStorage.getItem(key);
  if (localStoragePodcasts) {
    const parsedData = JSON.parse(localStoragePodcasts);
    return parsedData;
  }
  return null;
};

export const getPodcastDetail = async (id: string) => {
  const cachedPodcasts = getPodcastsFromLocalStorage('podcasts');
  return cachedPodcasts?.data.find((podcast: any) => podcast.id === id);
};

export const getPodcastsData = async () => {
  const cachedPodcasts = getPodcastsFromLocalStorage('podcasts');
  if (cachedPodcasts && cachedPodcasts.lastUpdated) {
    const lastUpdated = new Date(cachedPodcasts.lastUpdated);
    const currentDate = new Date();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (currentDate.getTime() - lastUpdated.getTime() < oneDayInMilliseconds) {
      return cachedPodcasts.data;
    }
  }

  const response = await fetchPodcasts('/api/popularPodcast');
  savePodcastsToLocalStorage(sanitizePodcastEpisodeList(response), 'podcasts');
  return sanitizePodcastEpisodeList(response);
};

const savePodcastIdsToLocalStorage = (ids: string[]) => {
  localStorage.setItem('podcastIds', JSON.stringify(ids));
};

const getPodcastIdsFromLocalStorage = () => {
  const localStorageIds = localStorage.getItem('podcastIds');
  return localStorageIds ? JSON.parse(localStorageIds) : [];
};


export const sanitizeData = (data: any) => data.map((podcast: any) => {
  const id = podcast.trackId;
  const title = podcast.trackName;
  const date = new Date(podcast.releaseDate).toLocaleDateString();
  const durationInSeconds = podcast.trackTimeMillis / 1000;
  const duration = `${Math.floor(durationInSeconds / 60)}:${(durationInSeconds % 60).toString().padStart(2, '0')}`;

  return { id, title, date, duration };
});



export const getPodcastListById = async (id: string) => {
  const cachedEpisodeList = getPodcastsFromLocalStorage('episodes');
  const cachedPodcastIds = getPodcastIdsFromLocalStorage();

  const podcastIdIndex = cachedPodcastIds.findIndex((item: { id: string; }) => item.id === id);

  if (podcastIdIndex !== -1) {
    const cachedPodcastIdTimestamp = new Date(cachedPodcastIds[podcastIdIndex].timestamp);
    const currentDate = new Date();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (currentDate.getTime() - cachedPodcastIdTimestamp.getTime() < oneDayInMilliseconds) {
      return cachedEpisodeList?.data;
    }
  }

  const response = await fetchPodcasts(`/api/detailPodcast?podcastId=${id}`);

  const sanitizedResponse = sanitizeData(response);

  if (podcastIdIndex !== -1) {
    cachedPodcastIds[podcastIdIndex].timestamp = new Date();
  } else {
    cachedPodcastIds.push({ id, timestamp: new Date() });
  }
  savePodcastIdsToLocalStorage(cachedPodcastIds);

  savePodcastsToLocalStorage(
    {
      episodes: [...sanitizedResponse]
    },
    'episodes'
  );

  return {
    episodes: sanitizedResponse,
  };
};

