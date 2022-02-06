import type { NextPage } from "next";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  const cardStyle = {
    height: "200px",
    cursor: "pointer",
  };
  return (
    <>
      <h1>Welcome to Yamoyamoto's Site !</h1>

      <div className="works_wrapper">
        <h2>Works</h2>
        <div className="cards_wrapper">
          <div className="card_wrapper">
            <Link href="/information_retrieval">
              <Card style={cardStyle}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    形態素解析ツール
                  </Typography>
                  <Typography variant="body2">
                    日本語の文章を単語に分割するツール
                    <br />
                    <br />
                    (バックエンドはPython, フロントはNext.js)
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link href="/">
              <Card style={cardStyle}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    About Me
                  </Typography>
                  <Typography variant="body2">作成予定。</Typography>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="card_wrapper">
            <Link href="/">
              <Card style={cardStyle}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    簡易検索システム
                  </Typography>
                  <Typography variant="body2">
                    作成予定。
                    <br />
                    <br />
                    (tf-idfやコサイン類似度による関連度計算の実装練習)
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .works_wrapper {
          margin: 100px 0;
        }

        .cards_wrapper {
        }

        .card_wrapper {
          display: inline-block;
          width: 250px;
          margin: 10px;
        }
      `}</style>
    </>
  );
};

export default Home;
