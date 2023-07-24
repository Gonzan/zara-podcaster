import Head from 'next/head'
import Header from '@/components/Header'
import Container from '@/components/Container'
import PodcastHighlight from '@/components/PodcastHighlight';
import EpisodeCard from '@/components/EpisodeCard';
import Card from '@/components/Card';
import styles from '@/styles/Episode.module.css'
import { getPodcastDetail, getPodcastListById } from '@/utils/getPodcasts'
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

export default function Episode() { 
  const router = useRouter();
  const { podcastId, episodeId } = router.query;

  const { data: podcastDetails, isLoading: isLoadingPodcastDetails } = useQuery(
    ['podcastDetails', podcastId], () => getPodcastDetail(podcastId as string));

  const { data :episodes, isSuccess } = useQuery('episodes', () => getPodcastListById(String(podcastId)));
  
  return (
    <>
      <Head>
        <title>Epidsode Detail</title>
        <meta name="description" content="Podcast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <aside>
                <PodcastHighlight
                  {...podcastDetails}
                />
            </aside>

            <section className={styles.content}>
              {isSuccess && (
              <EpisodeCard
                title={podcastDetails.title}
                description={podcastDetails.summary}
                audioSrc={isSuccess && episodes.episodes.find((episode: any) => episode.id == episodeId).episodeUrl}
              />
              )}
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}
