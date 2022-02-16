import * as React from "react";
import { makeStyles } from "@material-ui/core";

import { SearchBox } from "../molecule/SearchBox";

type SearchDocumentAppProps = {};

export const SearchDocumentApp = (props: SearchDocumentAppProps) => {
  const [query, setQuery] = React.useState("");

  const classes = useStyle();
  return (
    <div className={classes.searchBoxWrapper}>
      <SearchBox query={query} updateQuery={setQuery} onEnterButton={(q: string) => { }} />
    </div>
  );
};

const useStyle = makeStyles({
  searchBoxWrapper: {
    maxWidth: "400px",
    display: "flex",
  },
  paginationItem: {
    color: "white",
    borderColor: "gray",
  },
});