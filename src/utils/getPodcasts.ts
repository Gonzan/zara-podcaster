export const fetchPodcasts = async () => {
  const response = await fetch('/api/popularPodcast');
  const data = await response.json();
  return data;
};

export const savePodcastsToLocalStorage = (podcasts: any) => {
  const currentDate = new Date().toISOString();
  localStorage.setItem('podcasts', JSON.stringify({ data: podcasts, lastUpdated: currentDate }));
};

export const getPodcastsFromLocalStorage = () => {
  const localStoragePodcasts = localStorage.getItem('podcasts');
  return localStoragePodcasts ? JSON.parse(localStoragePodcasts) : null;
};

export const getPodcastsData = async () => {
  const cachedPodcasts = getPodcastsFromLocalStorage();
  if (cachedPodcasts && cachedPodcasts.lastUpdated) {
    const lastUpdated = new Date(cachedPodcasts.lastUpdated);
    const currentDate = new Date();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (currentDate.getTime() - lastUpdated.getTime() < oneDayInMilliseconds) {
      return cachedPodcasts.data;
    }
  }

  const response = await fetchPodcasts();
  savePodcastsToLocalStorage(response);
  return response;
};
