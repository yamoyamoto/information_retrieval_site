import * as React from "react";
import { SearchBox } from "../molecule/SearchBox";

type SearchDocumentAppProps = {};

export const SearchDocumentApp = (props: SearchDocumentAppProps) => {
  const [query, setQuery] = React.useState("");

  return (
    <div>
      <SearchBox query={query} updateQuery={setQuery} />
    </div>
  );
};
