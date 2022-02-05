import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <>
      <h1>Welcome to Yamoyamoto's Site !</h1>

      <div style={{ margin: "100px 0" }}>
        <h2>Contents</h2>
        <Link href="/information_retrieval">
          <Card style={{ maxWidth: "275px", height: "200px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                形態素解析ツール
              </Typography>
              <Typography variant="body2">
                日本語の文章を単語に分割するツール
                <br />
                (バックエンドにPython使用)
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
