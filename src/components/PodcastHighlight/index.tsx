import Image from "next/image";
import Divider  from "../Divider";
import Description from "../Description";
import Card from "../Card";
import styles from "./PodcastHighlight.module.css";
import Link from "next/link";

type PodcastHighlightProps = {
  id: string;
  title?: string;
  summary: string;
  imageUrl: string;
  author: string;
}

const PodcastHighlight: React.FC<PodcastHighlightProps> = ({
  imageUrl,
  summary,
  author,
  id,
  title,
}) => {
  return (
    <Card data-testid="podcast-highlight">
      <Link href={`/podcast/${id}`} >
        <Image
          src={imageUrl}
          alt='podcast image'
          width={500}
          height={500}
          data-testid="podcast-image"
          className={styles.image}
        />
      </Link>
      <Divider data-testid="divider-1" />
      <div className={styles.author}>
        <Link href={`/podcast/${id}`} >
          <Description
            key={id}
            title={title}
            description={"By "+ author}
          />
        </Link>
      </div>
      
      {summary && (
        <Description
          key={id}
          subtitle="Descrtiption"
          description={summary.split('.')[0]  + '.'}
        /> 
      )}
    </Card>
  );
};

export default PodcastHighlight;
