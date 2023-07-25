import { SanitizedPodcasts } from "@/components/FilterSection/types";
import { sanitizePodcastEpisodeList } from "./sanitizePodcastEpisodeList";

const hasPassed24Hours = (lastVisited: Date): boolean => {
  const twentyFourHours = 24 * 60 * 60 * 1000; 
  const currentTime = new Date().getTime();
  const lastVisitedTime = new Date(lastVisited).getTime();
  const timeDifference = currentTime - lastVisitedTime;

  return timeDifference >= twentyFourHours;
};

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
  localStorage.setItem(key, JSON.stringify({ data: [...podcasts], lastUpdated: currentDate }));
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
    if (!hasPassed24Hours(new Date(cachedPodcasts.lastUpdated))) {    
      return cachedPodcasts.data;
    }
  }

  const response = await fetchPodcasts('/api/popularPodcast');
  savePodcastsToLocalStorage(sanitizePodcastEpisodeList(response), 'podcasts');
  return sanitizePodcastEpisodeList(response);
};


export const sanitizeData = (data: any) => {
  data.shift()

  return data.map((podcast: any) => {
    const id = podcast.trackId;
    const title = podcast.trackName;
    const date = new Date(podcast.releaseDate).toLocaleDateString();
    const durationInSeconds = podcast.trackTimeMillis / 1000;
    const duration = `${Math.floor(durationInSeconds / 60)}:${(durationInSeconds % 60).toString().padStart(2, '0')}`;
    const episodeUrl = podcast.episodeUrl;
    
    return { id, title, date, duration, episodeUrl};
  });
};

export const getPodcastListById = async (id: string) => {

  const saveEpisodes = (episodes: any, key: string) => {
    const old =  getPodcastsFromLocalStorage('episodes') || [];
    localStorage.setItem(key, JSON.stringify([...old, ...episodes]));
  };


  const cachedEpisodeList = getPodcastsFromLocalStorage('episodes');
  
  if (!cachedEpisodeList) {
    const response = await fetchPodcasts(`/api/detailPodcast?podcastId=${id}`);

    const sanitizedData = sanitizeData(response);

    saveEpisodes([{
      episodes:sanitizedData,
      id,
      lastUpdated: new Date().toISOString(),
    }], 'episodes');
    
    return sanitizedData;

  }else{
    const podcast = cachedEpisodeList.find((podcast: any) => podcast.id === id);

    if(!podcast) {
      const response = await fetchPodcasts(`/api/detailPodcast?podcastId=${id}`);
      const sanitizedData = sanitizeData(response);
    
      saveEpisodes([{
        episodes:sanitizedData,
        id,
        lastUpdated: new Date().toISOString(),
      }], 'episodes');
    
      return sanitizedData;
    } else { 
      if(hasPassed24Hours(new Date(podcast.lastUpdated))) {
        const response = await fetchPodcasts(`/api/detailPodcast?podcastId=${id}`);
        const sanitizedData = sanitizeData(response);

        saveEpisodes([{
          episodes:sanitizedData,
          id,
          lastUpdated: new Date().toISOString(),
        }], 'episodes');

        return sanitizedData;
      }

      return podcast;
    }
  }

};
