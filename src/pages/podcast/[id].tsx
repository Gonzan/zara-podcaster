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
  const { id } = router.query;
  const { data } = useQuery('episodes', () => getPodcastListById(String(id)));

  const { data: podcastDetails, isLoading: isLoadingPodcastDetails } = useQuery(
  ['podcastDetails', id], () => getPodcastDetail(id as string));

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Podcast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
        <Container>
          <div className={styles.grid}>
            <aside className={styles.aside}>
              <Card>
                <PodcastHighlight
                  {...podcastDetails}
                />
              </Card>
            </aside>
            <section className={styles.content}>
              <div className={styles.counter}>
                Episodes: {data?.episodes?.length}
              </div>
              <div className={styles.list}>
                {data && <PodcastList episodes={data.episodes} podcastId={String(id)} />}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}
