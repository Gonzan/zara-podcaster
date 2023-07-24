import Head from 'next/head'
import Header from '@/components/Header'
import { useQuery } from 'react-query';
import FilterSection from '@/components/FilterSection';
import Container from '@/components/Container';
import { getPodcastsData } from '@/utils/getPodcasts';
import Spin from '@/components/Spin';

export default function Home() {  
  const { data, isLoading } = useQuery('podcasts', getPodcastsData);

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
          {isLoading && <Spin />}
          {data && <FilterSection podcasts={data} />}
        </Container>
      </main>
    </>
  )
}
