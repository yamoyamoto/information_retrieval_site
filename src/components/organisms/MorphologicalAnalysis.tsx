import * as React from "react";
import {
  Button,
  TextareaAutosize,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@material-ui/core";
import axios from "../../../lib/axios";
import { makeStyles } from "@material-ui/core";

import { ChooseWordClass } from "../molecule/ChooseWordClass";

const useStyles = makeStyles({
  morphologicalAnalysisWrap: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
  },
  button: {
    borderColor: "#A9A9A9",
    border: "0.1px solid",
    padding: "5px 15px",
    borderRadius: "5px",
    color: "white",
  },
  tableCell: {
    color: "white",
  },
  chooseWordClassWrap: {
    margin: "30px 0",
    textAlign: "left",
  },
  chooseWordClassContent: {
    border: "0.1px solid",
    padding: "10px",
  },
  chooseWordClassTitle: {
    fontSize: "20px",
  },
});

type Props = {};

export const MorphologicalAnalyzer: React.FC<Props> = (props: Props) => {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<RowData[]>([]);
  const [chosenWordClass, updateChosenWordClass] = React.useState<string[]>([]);
  const [onSearching, changeOoSearching] = React.useState(false);

  const execAnalysis = () => {
    changeOoSearching(true)
    const reqBody = {
      text: text,
      use_word_class_filter: chosenWordClass.length !== 0,
      word_classes: chosenWordClass,
    };
    axios.post("/", reqBody).then((res) => {
      console.log(res);
      setResult(res.data.morphemes);
      changeOoSearching(false);
    });
  };


  const classes = useStyles();

  return (
    <>
      <div className={classes.morphologicalAnalysisWrap}>
        <div>
          <div className={classes.chooseWordClassWrap}>
            <p className={classes.chooseWordClassTitle}>★品詞選択(何も選択しなかった場合全ての要素が表示されます)</p>
            <div className={classes.chooseWordClassContent}>
              <ChooseWordClass chosen={chosenWordClass} updateChosen={updateChosenWordClass} />
            </div>
            <p>※品詞分類についての詳細は<a href="https://hayashibe.jp/tr/mecab/dictionary/ipadic" target="_blank" rel="noopener noreferrer">こちら(ブログ記事)</a>。</p>
          </div>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="文章を入力"
            style={{ width: "100%" }}
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <Button className={classes.button} variant="outlined" onClick={execAnalysis}>
          解析する
        </Button>

        <div className="result_wrapper" style={{ margin: "50px 0" }}>
          {
            onSearching ?
              <p>解析中です...(初回起動時は少し時間かかります)</p>
              :
              <ResultTable data={result} />
          }
        </div>
      </div>
    </>
  );
};

type TableProps = {
  data: RowData[];
};

type RowData = {
  morpheme: Morpheme;
  count: number;
};

type Morpheme = {
  surface: string;
  count: number;
  featureString: string;
};

const ResultTable: React.FC<TableProps> = (props: TableProps) => {
  const classes = useStyles();

  return (
    <>
      <div className="result_table_wrapper">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Surface</TableCell>
              <TableCell className={classes.tableCell}>Detail</TableCell>
              <TableCell className={classes.tableCell}>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              ? props.data.map((rowData: RowData, i) => {
                if (rowData.morpheme.surface != "") {
                  return (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell className={classes.tableCell}>
                        {rowData.morpheme.surface}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {rowData.morpheme.featureString}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {rowData.count}
                      </TableCell>
                    </TableRow>
                  );
                }
              })
              : null}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
