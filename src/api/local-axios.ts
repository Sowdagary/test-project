import axios from "axios";

/**
 * axios instance and interceptors are created here.
 * Will subscribe to redux store later on.
 */

const localApi = axios.create({
  baseURL: process.env.API_SITE_BASE,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});
export default localApi;
