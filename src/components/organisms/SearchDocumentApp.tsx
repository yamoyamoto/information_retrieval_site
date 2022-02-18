import * as React from "react";
import { makeStyles } from "@material-ui/core";

import { SearchBox } from "../molecule/SearchBox";
import { DocumentCard } from "../molecule/DocumentCard";
import { SelectButton } from "../molecule/SelectButton";
import axios from "../../../lib/axios";

type SearchDocumentAppProps = {};

type Document = {
  body: string;
}
type DocumentResult = {
  document: Document;
  tf?: number;
  df?: number;
  idf?: number;
  tfIdf?: number;
}

export const SearchDocumentApp = (props: SearchDocumentAppProps) => {
  const [query, setQuery] = React.useState("");
  const [resultCards, setResultCards] = React.useState([]);
  const [searchingNow, SetSearchingNow] = React.useState(false);

  const classes = useStyle();

  const Search = (q: string) => {
    SetSearchingNow(true);
    const reqBody = {
      q: q,
    }
    axios.post("document/search/tf_idf", reqBody).then((res) => {
      console.log(res);
      try {
        const cards = res.data.result.map((one: DocumentResult, i: number) => {
          return (
            <DocumentCard
              key={i}
              body={one.document.body}
              tf={one.tf}
              df={one.df}
              idf={one.idf}
              tfIdf={one.tfIdf}
            />
          );
        });
        setResultCards(cards);
        SetSearchingNow(false);
      } catch (e) {
        console.log(e);
      }
    });
  }

  const onSelected = (q: string) => {
    setQuery(q);
    Search(q);
  }

  return (
    <>
      <div className={classes.suggestQueryListWrapper}>
        <SelectButton selectList={suggestQueryList} onSelected={onSelected} />
      </div>
      <div className={classes.searchBoxWrapper}>
        <SearchBox query={query} updateQuery={setQuery} onEnterButton={Search} />
      </div>
      {
        searchingNow ?
          (
            <p>検索中です...(初回検索は時間かかることがあります)</p>
          )
          :
          (
            <div>
              {resultCards}
            </div>
          )
      }
    </>
  );
};

const useStyle = makeStyles({
  searchBoxWrapper: {
    maxWidth: "400px",
    display: "flex",
  },
  suggestQueryListWrapper: {
    margin: "30px 0",
  },
});

const suggestQueryList = [
  "コロナ",
  "ワクチン",
];