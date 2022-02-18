import type { NextPage } from "next";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const historyTimelinePropsList: historyTimelineProps[] = [
  {
    title: "株式会社STORY(長期インターン)",
    term: "2020年7月~2020年12月",
    description: "コンテンツ配信に必要な諸々の業務に携わる",
  },
  {
    title: "株式会社STORY(長期インターン)",
    term: "2020年12月~2022年1月",
    description: "PHP,MySQL,Reactを使用したフロントエンド,バックエンドの開発業務に携わる",
  },
  {
    title: "株式会社nanoFreaks(長期インターン)",
    term: "2021年12月~現在",
    description: "AWS CDK,SDK (Go,TypeScript) を使用したサーバーレスのプロダクト開発に携わる",
  },
];

type historyTimelineProps = {
  title: string;
  term: string;
  description: string;
}

const Home: NextPage = () => {
  const classes = useStyle();

  const historyTimeLineItems = historyTimelinePropsList.map((props: historyTimelineProps, i) => {
    return (
      <TimelineItem key={i}>
        <TimelineOppositeContent style={{ flex: 0.3 }}>
          <Typography>{props.term}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className={classes.timeLineContentTitle}>
            {props.title}
          </Typography>
          <Typography className={classes.timeLineContentDescription}>{props.description}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <>
      <h1>About Me</h1>

      <div className={classes.profileWrapper}>
        <h2>Profile</h2>
        <p>
          大阪出身の大学院生(2022/4~)。学部のときは物理学、大学院では情報学を専攻している。
          <br />
          大学院では情報学の中でも情報検索や自然言語処理周りの研究を行う。
          <br /><br />
          趣味は邦楽ロック鑑賞、中学,高校でも部活で取り組んでいたバレーボール、(少量の)お酒。
          <br /><br />
          開発はバックエンドが主領域。今までインターンの業務で扱ってきた言語は、PHP(1年)、Go(3ヶ月)、TypeScript(3ヶ月)。
          <br />
          最近はAWSの勉強に取り組んでいる。
        </p>
      </div>

      <div className={classes.historyWrapper}>
        <h2>History (Internship)</h2>
        <div className={classes.historyWrapper}>
          <Timeline align="left">
            {historyTimeLineItems}
          </Timeline>
        </div>
      </div>
    </>
  );
};

const useStyle = makeStyles({
  profileWrapper: {
    margin: "50px 0",
  },
  historyWrapper: {
    margin: "100px 0",
  },
  timeLineContentTitle: {
    fontSize: "1.5em",
    marginBottom: "15px",
  },
  timeLineContentDescription: {
    marginBottom: "100px",
  },
});

export default Home;