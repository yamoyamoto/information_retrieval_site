import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";

import React from "react";

type ChooseWordClassProps = {
  chosen: string[];
  updateChosen: (chosen: string[]) => void;
}

const wordClasses = ["名詞", "接頭詞", "動詞", "形容詞", "副詞", "連体詞", "接続詞", "助詞", "助動詞", "感動詞", "記号", "フィラー", "その他"];
const useStyles = makeStyles(() => ({
  checkBox: {
    color: "white",
  },
}));

export const ChooseWordClass = (props: ChooseWordClassProps) => {
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

  const checkBoxes = wordClasses.map((wordClass: string, i) => {
    return (
      <FormControlLabel
        key={i}
        control={<Checkbox
          className={classes.checkBox}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, wordClass)}
          checked={props.chosen.indexOf(wordClass) !== -1}
        />}
        label={wordClass}
      />
    )
  })

  return (
    <div>
      {checkBoxes}
    </div>
  )
}