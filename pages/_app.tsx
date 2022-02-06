import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/templates/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body,
        div#__next {
          height: 100%;
          background-color: black;
        }
        a:hover {
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
}

export default MyApp;
