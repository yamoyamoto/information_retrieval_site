import type { NextPage } from "next";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const Home: NextPage = () => {
  const workCardSettings: Array<Props> = [
    // {
    //   title: "About Me",
    //   description: "作成予定。",
    //   href: "/",
    // },
    {
      title: "形態素解析ツール",
      description: `日本語の文章を単語に分割するツール。バックエンドはFastAPI, フロントはNext.js`,
      href: "/information_retrieval",
    },
    {
      title: "プチ検索エンジン",
      description: `Google Custom APIを使用した検索エンジンインターフェイス。`,
      href: "/information_retrieval/mini_search_engine",
    },
    {
      title: "簡易情報検索システム(tf-idfによる実装)",
      description: `検索結果の順位付けロジックの実装練習で開発。バックエンドはFastAPI, フロントはNext.js`,
      href: "/information_retrieval/search_document",
    },
  ];

  let workCards = workCardSettings.map((setting, i) => {
    return (
      <WorkCard
        key={i}
        title={setting.title}
        description={setting.description}
        href={setting.href}
      ></WorkCard>
    );
  });

  return (
    <>
      <h1>Welcome to My Site !</h1>

      <div className="works_wrapper">
        <h2>Works</h2>
        <div className="cards_wrapper">{workCards}</div>
      </div>
      <style jsx>{`
        .works_wrapper {
          margin: 100px 0;
        }
      `}</style>
    </>
  );
};

type Props = {
  title: string;
  description: string;
  href: string;
};

const WorkCard: React.FC<Props> = (props: Props) => {
  const style = `
  .card_wrapper {
    display: inline-block;
    width: 250px;
    margin: 10px;
  }`;

  const classes = useStyles();
  return (
    <div className="card_wrapper">
      <Link href={props.href}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2">{props.description}</Typography>
          </CardContent>
        </Card>
      </Link>
      <style jsx>{style}</style>
    </div>
  );
};

const useStyles = makeStyles({
  card: {
    "&:hover": { backgroundColor: "gray" },
    height: "200px",
    cursor: "pointer",
  },
  workTitle: {
    textDecoration: "underline",
  },
});

export default Home;
