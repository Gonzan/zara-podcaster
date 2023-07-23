import { PodcastList, Podcast } from '../types/types';


class PodcastService {
  private baseUrl: string = "https://itunes.apple.com";
  private popularPodcastsUrl: string = "/us/rss/toppodcasts/limit=100/genre=1310/json";
  private podcastDetailUrl: string = "/lookup";

  async getPopularPodcasts(): Promise<PodcastList[]> {
    try {
      const response = await fetch(this.baseUrl + this.popularPodcastsUrl);
      const data = await response.json();
      return data.feed.entry;
    } catch (error) {
      console.error("Error fetching popular podcasts:", error);
      throw error;
    }
  }

  async getPodcastDetail(podcastId: string) {
    try {
      const response = await fetch(`${this.baseUrl + this.podcastDetailUrl}?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=20`);
      const data = await response.json();
      
      return data.results;
    } catch (error) {
      console.error("Error fetching podcast detail:", error);
      throw error;
    }
  }
}

export default PodcastService;
