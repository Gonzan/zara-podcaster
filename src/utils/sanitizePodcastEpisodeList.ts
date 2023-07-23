import {
  Podcast,
  PodcastImage,
  PodcastList,
} from "../components/FilterSection/types";

const getMaxHeightImage = (images: PodcastImage[]) => {
  const filteredImage = images.reduce((maxHeightImage, currentImage) => {
    const currentHeight = parseInt(currentImage.attributes.height, 10);
    const maxHeight = parseInt(maxHeightImage.attributes.height, 10);
    return currentHeight > maxHeight ? currentImage : maxHeightImage;
  });

  return filteredImage;
};

export const sanitizePodcastEpisodeList = (podcasts: PodcastList) => {
 
  const data = podcasts.map((podcast: Podcast) => {
    const {
      id,
      "im:image": imageUrl,
      "im:name": title,
      "im:artist": author,
    } = podcast;

    return {
      id: id.attributes["im:id"],
      imageUrl: getMaxHeightImage(imageUrl).label,
      title: title.label,
      author: author.label,
    };
  });

  return data;
};
