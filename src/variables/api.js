import axios from "axios";
import { cookies, authorizationCookieName } from "./cookie.js";

export const apiDomain = "http://developer-club-api.herokuapp.com/api";

export const localApiDomain = "http://localhost:5000/api";

axios.defaults.baseURL = apiDomain;

export const getAuthorizationHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(authorizationCookieName)}`,
    },
  };
};
