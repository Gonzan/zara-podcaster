import {
  Podcast,
  PodcastImage,
  PodcastList,
  SanitizedPodcasts,
  SanitizedPodcastsProps,
} from "../components/FilterSection/types";

const getMaxHeightImage = (images: PodcastImage[]) => {
  const filteredImage = images.reduce((maxHeightImage, currentImage) => {
    const currentHeight = parseInt(currentImage.attributes.height, 10);
    const maxHeight = parseInt(maxHeightImage.attributes.height, 10);
    return currentHeight > maxHeight ? currentImage : maxHeightImage;
  });

  return filteredImage;
};

export const filteredPodcasts = (podcasts: SanitizedPodcasts, searchTerm :string) => podcasts.filter(
  (podcast: SanitizedPodcastsProps) =>
    String(podcast.title)?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(podcast.author)?.toLowerCase().includes(searchTerm.toLowerCase())
);

export const sanitizePodcastEpisodeList = (podcasts: PodcastList) => {
 
  const data = podcasts.map((podcast: Podcast) => {
    const {
      id,
      summary,
      "im:image": imageUrl,
      "im:name": title,
      "im:artist": author,
    } = podcast;

    return {
      id: id.attributes["im:id"],
      summary: summary.label,
      imageUrl: getMaxHeightImage(imageUrl).label,
      title: title.label,
      author: author.label,
    };
  });

  return data;
};
