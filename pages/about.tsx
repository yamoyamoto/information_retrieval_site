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

      <div className={classes.historyWrapper}>
        <h2>History (Internship)</h2>
        <div className={classes.worksWrapper}>
          <Timeline align="left">
            {historyTimeLineItems}
          </Timeline>
        </div>
      </div>
    </>
  );
};

const useStyle = makeStyles({
  worksWrapper: {
    marginLeft: "0",
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