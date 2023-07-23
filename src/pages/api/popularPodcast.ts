import { NextApiRequest, NextApiResponse } from "next";
import PodcastService from "../../services/podcastService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Podcasts = new PodcastService();

  try {
    const popularPodcasts = await Podcasts.getPopularPodcasts();
    res.status(200).json(popularPodcasts);
  } catch (error) {
    console.error("Error fetching popular podcasts", error);
    res.status(500).json({ error: "Error fetching popular podcasts" });
  }
}
