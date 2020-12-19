import axios from "axios";
import { cookies, authorizationCookieName } from "./cookie.js";

export const apiDomain = "http://rmit-dsc-api.herokuapp.com/api";

axios.defaults.baseURL = apiDomain;

export const getAuthorizationHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(authorizationCookieName)}`,
    },
  };
};
