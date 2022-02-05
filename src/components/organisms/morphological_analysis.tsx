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
import axios from "../../../lib/axios";

type Props = {};

export const MorphologicalAnalyzer: React.FC<Props> = (props: Props) => {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState<RowData[]>([]);

  const execAnalysis = () => {
    const reqBody = {
      text: text,
      use_word_class_filter: true,
      word_classes: ["固有名詞"],
    };
    axios.post("/", reqBody).then((res) => {
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
          minRows={10}
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
        <ResultTable data={result} />
      </div>
    </div>
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
  console.log(props);
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Surface</TableCell>
          <TableCell>WordClass</TableCell>
          <TableCell>Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data
          ? props.data.map((rowData: RowData, i) => {
              if (rowData.morpheme.surface != "") {
                return (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{rowData.morpheme.surface}</TableCell>
                    <TableCell>{rowData.morpheme.featureString}</TableCell>
                    <TableCell>{rowData.count}</TableCell>
                  </TableRow>
                );
              }
            })
          : null}
      </TableBody>
    </Table>
  );
};
