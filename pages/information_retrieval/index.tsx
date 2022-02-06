import type { NextPage } from "next";
import Head from "next/head";
import { MorphologicalAnalyzer } from "../../src/components/organisms/morphological_analysis";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>IR Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to IR Site !</h1>

        <div style={{ margin: "100px 0" }}>
          <MorphologicalAnalyzer />
        </div>
      </main>
    </div>
  );
};

export default Home;
