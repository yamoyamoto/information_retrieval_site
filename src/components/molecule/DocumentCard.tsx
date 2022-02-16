import * as React from "react";
import { makeStyles } from "@material-ui/core";


type DocumentCardProps = {
  body: string;
  tf?: number;
  df?: number;
  idf?: number;
  tfIdf?: number;
}

export const DocumentCard = (props: DocumentCardProps) => {
  const classes = useStyle();

  return (
    <div className={classes.cardWrapper}>
      <p>{props.body}</p>
      <p>tf:{props.tf || "??"}</p>
      <p>df:{props.df || "??"}</p>
      <p>idf:{props.idf || "??"}</p>
      <p>tf-idf:{props.tfIdf || "??"}</p>
    </div>
  );
}

const useStyle = makeStyles({
  cardWrapper: {
    marginTop: "20px",
    maxWidth: "600px",
    padding: "10px",
    backgroundColor: "white",
    color: "black",
  },
});