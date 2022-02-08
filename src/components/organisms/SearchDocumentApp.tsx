import { TextareaAutosize, Button } from "@mui/material";
import * as React from "react";

type SearchDocumentAppProps = {};

export const SearchDocumentApp = (props: SearchDocumentAppProps) => {
  const [query, setQuery] = React.useState("");
  console.log(query);

  return (
    <div>
      <p>キーワード入力</p>
      <TextareaAutosize
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      ></TextareaAutosize>
      <Button style={{ backgroundColor: "purple" }}>検索!</Button>
    </div>
  );
};
