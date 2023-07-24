import React from "react";
import Description from "../Description";
import Card from "../Card";

type EpisodeCardProps = {
  title: string;
  description: string;
  audioSrc: string;
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  description,
  audioSrc,
}) => (
  <Card>
    <Description title={title} description={description} />
    <audio
      src={audioSrc}
      type="audio/mpeg"
      controls
      aria-label="Audio Player"
    />
  </Card>
);

export default EpisodeCard;
