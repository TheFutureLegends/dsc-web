import axios from "axios";
import { cookies, authorizationCookieName } from "./cookie.js";

// let apiDomain =
//   process.env.NODE_ENV === "production"
//     ? "https://developer-club-api.herokuapp.com/api"
//     : "http://localhost:5000/api";
let apiDomain = "https://developer-club-api.herokuapp.com/api";

axios.defaults.baseURL = apiDomain;

export const getAuthorizationHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(authorizationCookieName)}`,
    },
  };
};
