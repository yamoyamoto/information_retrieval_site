import Axios from "axios";

// Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const production = process.env.NODE_ENV === "production";

const axios = Axios.create({
  baseURL: production
    ? "https://information-retrieval-api.herokuapp.com/"
    : "https://information-retrieval-api.herokuapp.com/",
});

export default axios;
