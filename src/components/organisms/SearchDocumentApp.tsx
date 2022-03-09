import * as React from "react";
import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from "@material-ui/core";

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
  cosine: number;
}

export const SearchDocumentApp = (props: SearchDocumentAppProps) => {
  const [query, setQuery] = React.useState("");
  const [resultCards, setResultCards] = React.useState([]);
  const [searchingNow, SetSearchingNow] = React.useState(false);
  const [searchMethod, setSearchMethod] = React.useState("tf_idf");

  const classes = useStyle();

  const getAPIPath = () => {
    if (searchMethod == "tf_idf") {
      return "document/search/tf_idf";
    } else if (searchMethod == "cosine") {
      return "document/search/cosine";
    } else {
      throw new Error("search method was not found");
    }
  }

  const Search = (q: string) => {
    SetSearchingNow(true);
    const reqBody = {
      q: q,
    }
    axios.post(getAPIPath(), reqBody).then((res) => {
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
              tfIdf={searchMethod === "tf_idf" ? one.tfIdf : undefined}
              cosine={searchMethod === "cosine" ? one.cosine : undefined}
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
        <p>★提案ワード</p>
        <SelectButton selectList={suggestQueryList} onSelected={onSelected} />
      </div>
      <div className={classes.suggestQueryListWrapper}>
        <p>★検索方法</p>
        <FormControl>
          <RadioGroup defaultValue="tf_idf" onChange={(event) => { setSearchMethod(event.target.value) }}>
            <FormControlLabel value="tf_idf" control={<Radio />} label="tf-idf"></FormControlLabel>
            <FormControlLabel value="cosine" control={<Radio />} label="cosine"></FormControlLabel>
          </RadioGroup>
        </FormControl>
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
    margin: "50px 0",
  },
});

const suggestQueryList = [
  "コロナ",
  "ワクチン",
  "オミクロン",
  "大阪",
];