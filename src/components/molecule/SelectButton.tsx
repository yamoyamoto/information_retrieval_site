import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

type SelectButtonProps = {
  selectList: string[];
  onSelected: (s: string) => void;
}

export const SelectButton = (props: SelectButtonProps) => {
  const classes = useStyles();

  const buttons = props.selectList.map((s, i) => {
    return (
      <Button
        className={classes.selectButton}
        key={i}
        onClick={() => { props.onSelected(s) }}
        variant="contained"
      >{s}</Button>
    )
  });

  return (
    <>
      {buttons}
    </>
  )
}

const useStyles = makeStyles({
  selectButton: {
    backgroundColor: "white",
    marginRight: "10px",
  },
});