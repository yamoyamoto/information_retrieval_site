import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MorphologicalAnalyzer } from "../src/organisms/morphological_analysis";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>IR Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to IR Site !</h1>

        <MorphologicalAnalyzer />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
