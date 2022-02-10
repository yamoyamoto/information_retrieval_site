import Axios from "axios";

Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
Axios.defaults.headers.get["X-Forwarded-Proto"] = "https";
const production = process.env.NODE_ENV === "production";

const axios = Axios.create({
  baseURL: production ? "https://yamoto-ir-api.herokuapp.com/" : "https://yamoto-ir-api.herokuapp.com/",
});

export default axios;
