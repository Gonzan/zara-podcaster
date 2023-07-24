import styles from './PodcastList.module.css';
import Link from 'next/link';
interface PodcastListProps {
  episodes: Episode[];
  podcastId: string;
}

type Episode = {
  id: string;
  title: string;
  date: string;
  duration: string;
}

const PodcastList: React.FC<PodcastListProps> = ({ episodes, podcastId }) => {  
  return (
    <div className={styles.podcastList} data-testid="podcastList">
      <table width='100%'>
        <thead>
          <tr className={styles.podcastList__theaders}>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody className={styles.showColors}>
          {
            episodes?.map((episode) => {
              return (
                <tr key={episode.title}>
                  <td>
                  <Link
                    href={`/podcast/${podcastId}/episode/${episode.id}`}
                  >
                  {episode.title}
                  </Link>
                  
                  </td>
                  <td>
                    {episode.date}
                  </td>
                  <td>
                    {episode.duration}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default PodcastList;
