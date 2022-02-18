import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";

const useStyle = makeStyles({
  button: {
    color: "white",
    border: "1px solid",
    borderColor: "white",
    padding: "2px",
    margin: "5px 10px",
  },
  textArea: {
    backgroundColor: "white",
  },
});

type SearchBoxProps = {
  query: string;
  updateQuery: (newQuery: string) => void;
  onEnterButton: (q: string) => void;
};

export const SearchBox = (props: SearchBoxProps) => {
  const classes = useStyle();

  return (
    <div style={{ display: "flex" }}>
      <TextField
        fullWidth
        label="キーワードを入力"
        value={props.query}
        onChange={(event) => {
          props.updateQuery(event.target.value);
        }}
        className={classes.textArea}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            props.onEnterButton(props.query);
          }
        }}
      ></TextField>
      <Button
        className={classes.button}
        onClick={() => {
          props.onEnterButton(props.query);
        }}
      >
        検索
      </Button>
    </div>
  );
};
