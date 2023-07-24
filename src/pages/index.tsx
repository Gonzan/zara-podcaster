import Head from "next/head";
import { useQuery } from "react-query";
import FilterSection from "@/components/FilterSection";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Spin from "@/components/Spin";
import { getPodcastsData } from "@/utils/getPodcasts";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { data, isLoading } = useQuery("podcasts", getPodcastsData);

  return (
    <>
      <Head>
        <title>Zara podcaster</title>
        <meta name="description" content="Podcast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Container>
          {isLoading && <Spin />}
          {data && <FilterSection podcasts={data} />}
        </Container>
      </main>
    </>
  );
}
