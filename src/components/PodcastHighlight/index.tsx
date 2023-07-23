import Image from "next/image";
import Divider  from "../Divider";
import Description from "../Description";
import Card from "../Card";

type PodcastHighlightProps = {
  imageUrl: string;
  descriptions: DescriptionProps[];
}

type DescriptionProps = {
  title?: string;
  subtitle?: string;
  text: string;
}

const PodcastHighlight: React.FC<PodcastHighlightProps> = ({
  imageUrl,
  descriptions,
}) => {
  return (
    <Card data-testid="podcast-highlight">
      <Image
        src={imageUrl}
        alt='podcast image'
        width={500}
        height={500}
        data-testid="podcast-image"
      />
      <Divider data-testid="divider-1" />
      {descriptions.map((description) => (
        <Description
          key={description.title}
          title={description.title}
          subtitle={description.subtitle}
          description={description.text}
          data-testid="podcast-description"
        />
      ))  
      }
    </Card>
  );
};

export default PodcastHighlight;
