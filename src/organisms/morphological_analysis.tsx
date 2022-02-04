import * as React from "react";
import {
  Button,
  TextareaAutosize,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import axios from "../../lib/axios";

type Props = {};

export const MorphologicalAnalyzer: React.FC<Props> = (props: Props) => {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<Morpheme[]>([]);

  const execAnalysis = () => {
    axios.get("/morphological_analysis?s=" + text).then((res) => {
      console.log(res);
      setResult(res.data.morphemes);
    });
  };

  return (
    <div
      className="morphological_analysis_wrap"
      style={{ minWidth: "50%", textAlign: "center" }}
    >
      <div>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="文章を入力"
          style={{ width: "100%" }}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <Button variant="outlined" onClick={execAnalysis}>
        解析する
      </Button>

      <div className="result_wrapper" style={{ margin: "50px 0" }}>
        <ResultTable morphemes={result} />
      </div>
    </div>
  );
};

type TableProps = {
  morphemes: Morpheme[];
};

type Morpheme = {
  surface: string;
  count: number;
};

const ResultTable: React.FC<TableProps> = (props: TableProps) => {
  console.log(props);
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Surface</TableCell>
          <TableCell>Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.morphemes
          ? props.morphemes.map((morpheme: Morpheme, i) => {
              if (morpheme.surface != "") {
                return (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {morpheme.surface}
                    </TableCell>
                    <TableCell>{morpheme.count}</TableCell>
                  </TableRow>
                );
              }
            })
          : null}
      </TableBody>
    </Table>
  );
};
