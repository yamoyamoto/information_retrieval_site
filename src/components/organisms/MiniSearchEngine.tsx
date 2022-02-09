import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { SearchBox } from "../molecule/SearchBox";

import { SearchResultCard, SearchResultCardProps } from "../molecule/SearchResultCard";
import axios from "../../../lib/googleApiAxios";

type MiniSearchEngineProps = {};

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const searchEngineId = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_ID;

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

  const Search = (q: string) => {
    axios.get(`/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${q}`).then((res) => {
      try {
        console.log(res);
        let newSearchResults = res.data.items.map((item: any) => {
          return {
            title: item.title,
            url: item.link,
            metaDesc: item.snippet,
          };
        });
        updateSearchResults(newSearchResults);
      } catch (e) {
        console.log(e);
      }
    });
  };

  const searchResultCards = searchResults.map((props: SearchResultCardProps, i) => {
    return <SearchResultCard key={i} {...props} />;
  });

  return (
    <div className="mini_search_engine_wrapper">
      <div className={classes.searchBoxWrapper}>
        <SearchBox query={query} updateQuery={setQuery} onEnterButton={Search} />
      </div>
      <div className="search_result_wrapper">{searchResultCards}</div>
    </div>
  );
};
