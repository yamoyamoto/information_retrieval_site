import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout_wrapper">
      <Head>
        <title>Yamoyamoto&apos;s Site</title>
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="https://github.com/yamoyamoto/information_retrieval_site">Repository</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div>{children}</div>

      <footer>
        <hr />
        <ul>
          <li>
            <a href="https://github.com/yamoyamoto">
              <p style={{ margin: "0" }}>GitHub</p>
              <img src="/icon-white-github.png" height="30px" />
            </a>
          </li>
        </ul>
      </footer>
      <style jsx>{`
        .layout_wrapper {
          max-width: 1000px;
          height: 100%;
          color: white;
          margin: auto;
        }

        header {
          margin-top: 20px;
        }

        ul {
          display: flex;
        }

        li {
          list-style: none;
          margin-right: 30px;
        }

        footer {
          text-align: center;
          margin-bottom: 90px;
        }
        footer li {
          margin: auto;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Layout;
