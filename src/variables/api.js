import axios from "axios";
import { cookies, authorizationCookieName } from "./cookie.js";

let apiDomain = "";

if (process.env.NODE_ENV === "production") {
  apiDomain = "http://developer-club-api.herokuapp.com/api";
} else {
  apiDomain = "http://localhost:5000/api";
}

axios.defaults.baseURL = apiDomain;

export const getAuthorizationHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(authorizationCookieName)}`,
    },
  };
};
