import React from "react";

import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export type SearchResultCardProps = {
  title: string;
  url: string;
  metaDesc: string;
};

export const SearchResultCard = (props: SearchResultCardProps) => {
  const useStyle = makeStyles({
    cardWrapper: {
      margin: "20px 0",
      maxWidth: "600px",
    },
    searchResultWrapper: {
      marginTop: "30px",
    },
  });
  const classes = useStyle();

  return (
    <div className={classes.cardWrapper}>
      <Card>
        <CardContent>
          <Typography variant="h5">
            <a target="_blank" rel="noopener noreferrer" href={props.url}>
              {props.title}
            </a>
          </Typography>
          <Typography variant="body2">{props.metaDesc}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
