import Head from 'next/head'
import Header from '@/components/Header'
import Container from '@/components/Container';
import styles from '@/styles/Detail.module.css'
import PodcastHighlight from '@/components/PodcastHighlight';
import Card from '@/components/Card';
import PodcastList from '@/components/PodcastList';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { getPodcastListById, getPodcastDetail } from '@/utils/getPodcasts';

export default function Detail() {  
  const router = useRouter();
  const { podcastId } = router.query;
  const { data } = useQuery('episodes', () => getPodcastListById(String(podcastId)));

  const { data: podcastDetails, isLoading: isLoadingPodcastDetails } = useQuery(
  ['podcastDetails', podcastId], () => getPodcastDetail(podcastId as string));

  return (
    <>
      <Head>
        <title>Podcasta Episodes</title>
        <meta name="description" content="Podcast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <aside className={styles.aside}>
              <PodcastHighlight
                {...podcastDetails}
              />
            </aside>
            
            <section className={styles.content}>
              <Card className={styles.counter}>
                Episodes: {data?.episodes?.length}
              </Card>
              <Card className={styles.list}>
                {data && <PodcastList episodes={data.episodes} podcastId={String(podcastId)} />}
              </Card>
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}
