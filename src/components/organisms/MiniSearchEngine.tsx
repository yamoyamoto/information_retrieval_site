import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { SearchBox } from "../molecule/SearchBox";

import { SearchResultCard, SearchResultCardProps } from "../molecule/SearchResultCard";

type MiniSearchEngineProps = {};

export const MiniSearchEngine = (props: MiniSearchEngineProps) => {
  const [query, setQuery] = React.useState("");
  const [searchResults, updateSearchResults] = React.useState<SearchResultCardProps[]>([
    {
      title: "検索結果1",
      url: "#",
      metaDesc: "~~~~",
    },
  ]);

  const useStyle = makeStyles({
    searchBoxWrapper: {
      maxWidth: "400px",
      display: "flex",
    },
  });
  const classes = useStyle();

  const searchResultCards = searchResults.map((props: SearchResultCardProps, i) => {
    return <SearchResultCard key={i} {...props} />;
  });

  return (
    <div className="mini_search_engine_wrapper">
      <div className={classes.searchBoxWrapper}>
        <SearchBox query={query} updateQuery={setQuery} />
      </div>
      <div className="search_result_wrapper">{searchResultCards}</div>
    </div>
  );
};
