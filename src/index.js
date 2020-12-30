import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import PerfectScrollbar from "react-perfect-scrollbar";

import AuthLayout from "./layouts/Auth/Auth.js";
import AdminLayout from "./layouts/Admin/Admin.js";
import GeneralLayout from "./layouts/General/General.js";
// import RTLLayout from "layouts/RTL/RTL.js";
import PostDetailPage from "./views/postDetail/PostDetail.js";

import store from "./core/redux/store";
import { Provider } from "react-redux";
import { cookies, authorizationCookieName } from "./variables/cookie.js";
import { logoutUser, getAuthUserData } from "./core/redux/actions/user.action";
import { getPostListDataTable } from "./core/redux/actions/post.action";
import { getAllCategories } from "./core/redux/actions/category.action";

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
    <BrowserRouter>
      <Switch>
        {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" /> */}
        {/* <Route render={(props) => <AuthLayout {...props} />}></Route> */}
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route
          path="/control-panel"
          render={(props) => <AdminLayout {...props} />}
        />
        <Route
          // exact
          path="/"
          render={(props) => <GeneralLayout {...props} />}
        />

        {/* <Redirect from="/" to="/dsc" /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
