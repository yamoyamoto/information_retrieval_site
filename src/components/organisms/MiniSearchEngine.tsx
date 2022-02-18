import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { SearchBox } from "../molecule/SearchBox";
import { Pagination, PaginationItem } from "@mui/material";

import { SearchResultCard, SearchResultCardProps } from "../molecule/SearchResultCard";
import axios from "../../../lib/axios";

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

type MiniSearchEngineProps = {};

export const MiniSearchEngine = (props: MiniSearchEngineProps) => {
  const [query, setQuery] = React.useState("");
  const [searchResults, updateSearchResults] = React.useState<SearchResultCardProps[]>([]);
  const [nowPage, setNowPage] = React.useState<number>(0);
  const [didFirstSearch, setDidFirstSearch] = React.useState(false);
  const [searchingNow, setSearchingNow] = React.useState(false);

  const [totalSearchResults, updateTotalSearchResults] = React.useState(0);
  const [formattedSearchTime, updateFormattedSearchTime] = React.useState(0);


  const classes = useStyle();

  const Search = (q: string, startIndex?: number) => {
    updateSearchResults([]);
    setDidFirstSearch(true);
    setSearchingNow(true);
    axios.get(`/search?q=${q}&start_index=${startIndex || 1}`).then((res) => {
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
        updateTotalSearchResults(res.data.searchInformation.formattedTotalResults);
        updateFormattedSearchTime(res.data.searchInformation.formattedSearchTime);
        setSearchingNow(false);
      } catch (e) {
        console.log(e);
      }
    });
  };

  const searchResultCards = searchResults.map((props: SearchResultCardProps, i) => {
    return <SearchResultCard key={i} {...props} />;
  });

  const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setNowPage(page);
  };
  React.useEffect(() => {
    if (didFirstSearch) {
      Search(query, 10 * nowPage + 1);
    }
  }, [nowPage]);
  return (
    <div className="mini_search_engine_wrapper">
      <div className={classes.searchBoxWrapper}>
        <SearchBox query={query} updateQuery={setQuery} onEnterButton={Search} />
      </div>
      {
        !searchingNow ? null : (
          <div className="searching_now_wrap">
            <p>検索中です...(初回検索は時間かかることがあります)</p>
          </div>
        )
      }
      <div className="search_engine_content" style={searchResults.length !== 0 ? {} : { display: "none" }}>
        {totalSearchResults == 0 ? null : (
          <div className="search_result_desc_wrapper">
            <p>
              {totalSearchResults}件ヒットしました(検索時間:{formattedSearchTime}秒)
            </p>
          </div>
        )}
        <div className="search_result_wrapper">{searchResultCards}</div>
        {totalSearchResults === 0 ? null : (
          <div className="nav_bottom">
            <Pagination
              page={nowPage}
              onChange={changePage}
              variant="outlined"
              count={9}
              renderItem={(item) => {
                return (
                  <PaginationItem
                    className={classes.paginationItem}
                    style={{ borderColor: item.selected ? "white" : "black" }}
                    {...item}
                  />
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
