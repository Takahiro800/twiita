import axios from "axios";

const env = process.env;

export const Axios = axios.create({
  baseURL: env.REACT_APP_AXIOS_BASE_URL,
});
