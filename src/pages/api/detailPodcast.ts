import { NextApiRequest, NextApiResponse } from "next";
import PodcastService from "../../services/podcastService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { podcastId } = req.query;
  console.log("podcastId", req.query);
  
  if (typeof podcastId !== "string") {
    return res.status(400).json({ error: "Invalid podcastId" });
  }

  const Podcasts = new PodcastService();

  try {
    const podcastDetail = await Podcasts.getPodcastDetail(podcastId);
    res.status(200).json(podcastDetail);
  } catch (error) {
    console.error("Error fetching podcast detail", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
