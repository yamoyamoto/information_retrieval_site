import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

import React from "react";

type ChooseWordClassProps = {
  chosen: string[];
  updateChosen: (chosen: string[]) => void;
}

const wordClasses = ["名詞", "助詞", "動詞", "助動詞", "*"];

export const ChooseWordClass = (props: ChooseWordClassProps) => {
  const useStyles = makeStyles({
    checkBox: {
      color: "white",
      borderBlockColor: "white",
      borderColor: "white",
    },
  });
  const classes = useStyles();

  const addWordClass = (wordClass: string) => {
    let newChosen = props.chosen.slice();
    newChosen.push(wordClass);
    props.updateChosen(newChosen);
  }

  const deleteWordClass = (wordClass: string) => {
    const newChosen = props.chosen.filter(item => item != wordClass);
    props.updateChosen(newChosen);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, wordClass: string) => {
    if (event.target.checked) {
      addWordClass(wordClass);
    } else {
      deleteWordClass(wordClass);
    }
  }

  const checkBoxes = wordClasses.map((wordClass: string) => {
    return (
      <FormControlLabel
        control={<Checkbox
          className={classes.checkBox}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, wordClass)}
          checked={props.chosen.indexOf(wordClass) !== -1}
        />}
        label={wordClass}
      />
    )
  })

  console.log(props.chosen);

  return (
    <div>
      {checkBoxes}
    </div>
  )
}