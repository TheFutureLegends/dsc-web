// import React from "react";
import {
  cookies,
  contentLightModeCookieName,
  sidebarMiniCookieName,
} from "../variables/cookie.js";

export const IsSidebarMini = () => {
  if (
    cookies.get(sidebarMiniCookieName) &&
    document.body.classList.contains("sidebar-mini")
  ) {
    // console.log("Sidebar is active");

    return true;
  } else if (
    cookies.get(sidebarMiniCookieName) &&
    !document.body.classList.contains("sidebar-mini")
  ) {
    // console.log("Sidebar mini is active but no class");

    return true;
  } else {
    // console.log("Sidebar mini is deactive");
    return false;
  }
};

export const IsContentLightMode = () => {
  if (
    cookies.get(contentLightModeCookieName) &&
    document.body.classList.contains("white-content")
  ) {
    // console.log("White mode is active");

    return true;
  } else if (
    cookies.get(contentLightModeCookieName) &&
    !document.body.classList.contains("white-content")
  ) {
    // console.log("White mode is active but no class");

    return true;
  } else {
    // console.log("White mode is deactive");
    return false;
  }
};
