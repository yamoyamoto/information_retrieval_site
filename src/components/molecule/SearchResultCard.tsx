import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

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
