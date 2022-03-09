import * as React from "react";
import { makeStyles } from "@material-ui/core";


type DocumentCardProps = {
  body: string;
  tf?: number;
  df?: number;
  idf?: number;
  tfIdf?: number;
  cosine?: number;
}

export const DocumentCard = (props: DocumentCardProps) => {
  const classes = useStyle();

  return (
    <div className={classes.cardWrapper}>
      <p>{props.body}</p>
      <p>
        {props.tfIdf ? `tf-idf: ${props.tfIdf}` : null}
        {props.cosine ? `cosine: ${props.cosine}` : null}
        &nbsp;
        (
        tf: {props.tf || "??"},
        &nbsp;
        df: {props.df || "??"},
        &nbsp;
        idf: {props.idf || "??"}
        )
      </p>
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