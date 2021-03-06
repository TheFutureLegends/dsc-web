import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
// import PerfectScrollbar from "react-perfect-scrollbar";

// import AuthLayout from "./layouts/Auth/Auth.js";
// import AdminLayout from "./layouts/Admin/Admin.js";
// import GeneralLayout from "./layouts/General/General.js";
// import RTLLayout from "layouts/RTL/RTL.js";

import store from "./core/redux/store";
import { Provider } from "react-redux";
import { cookies, authorizationCookieName } from "./variables/cookie.js";
import { logoutUser, getAuthUserData } from "./core/redux/actions/user.action";
import { getPostListDataTable } from "./core/redux/actions/post.action";
import { getAllCategories } from "./core/redux/actions/category.action";

// import { getNumberOfTutorial } from "./core/redux/actions/bot.action";


// Styling
import "./assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "./assets/css/black-dashboard-pro-react.css";

const cookie = cookies.get(authorizationCookieName);

if (cookie) {
  store.dispatch(getAuthUserData(cookie));

  store.dispatch(getPostListDataTable());
} else {
  store.dispatch(logoutUser());
}

store.dispatch(getAllCategories());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
