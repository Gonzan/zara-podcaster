import Link from "next/link";
import styles from './PodcastCrad.module.css';
import Card from "../Card";
import Image from "next/image";

type PodcastCardProps = {
  imageUrl: string;
  title: string;
  author: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({imageUrl, title, author}) => {
  return (
    <Link href="/">
          <article className={styles.podcast}>
            <Card>
              <div className={styles.podcast__container}>
                <Image 
                  src={imageUrl}
                  alt="Podcast"
                  className={styles.podcast__image}
                  width={100}
                  height={100}
                />
                <div className={styles.podcast__content}>
                  <h3 className={styles.podcast__title}>{title}</h3>
                  <p className={styles.podcast__author}>Author: {author}</p>
                </div>
              </div>
            </Card>
          </article>
    </Link>
  );
}

export default PodcastCard;
