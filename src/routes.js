/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import VectorMap from "views/maps/VectorMap.js";
// import GoogleMaps from "views/maps/GoogleMaps.js";
// import FullScreenMap from "views/maps/FullScreenMap.js";

// import RegularTables from "views/tables/RegularTables.js";
// import ExtendedTables from "views/tables/ExtendedTables.js";
// import Wizard from "views/forms/Wizard.js";
// import ValidationForms from "views/forms/ValidationForms.js";
// import ExtendedForms from "views/forms/ExtendedForms.js";
// import RegularForms from "views/forms/RegularForms.js";

// import Buttons from "views/components/Buttons.js";

// import Notifications from "views/components/Notifications.js";
// import Grid from "views/components/Grid.js";
// import Typography from "views/components/Typography.js";

// import Icons from "views/components/Icons.js";
// import Pricing from "views/pages/Pricing.js";
// import Register from "views/pages/Register.js";
// import Timeline from "views/pages/Timeline.js";
// import User from "views/pages/User.js";

// import Rtl from "views/pages/Rtl.js";
// import Lock from "views/pages/Lock.js";

// import ReactTables from "./views/tables/ReactTables.js";
// import Calendar from "./views/Calendar.js";
// import Widgets from "./views/Widgets.js";
// import Charts from "./views/Charts.js";
import Homepage from "./views/homepage/Homepage.js";
import PostDetailPage from "./views/postDetail/PostDetail.js";

// import SweetAlert from "./views/components/SweetAlert.js";

/**
 * Authentication Page
 */
import Login from "./views/login/Login.js";
import Register from "./views/register/Register.js";

/**
 * Protected Page
 */
// import Dashboard from "./views/dashboard/Dashboard.js";
import PostList from "./views/postList/PostList.js";
import PostForm from "./views/postForm/PostForm.js";

export const protectedRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "رد فعل الطاولة",
  //   icon: "tim-icons icon-app",
  //   rtlMini: "در",
  //   component: Dashboard,
  //   layout: "/control-panel",
  //   authenticated: true,
  //   // redirect: "/auth/login",
  //   invisible: true,
  // },
  /**
   * Post Section
   */
  {
    path: "/post-list",
    name: "Post List",
    rtlName: "رد فعل الطاولة",
    icon: "tim-icons icon-notes",
    rtlMini: "در",
    component: PostList,
    layout: "/control-panel",
    authenticated: true,
    // redirect: "/auth/login",
    // invisible: true,
  },
  {
    path: "/post/create",
    name: "Create Post",
    rtlName: "رد فعل الطاولة",
    icon: "tim-icons icon-notes",
    rtlMini: "در",
    component: PostForm,
    layout: "/control-panel",
    authenticated: true,
    // redirect: "/auth/login",
    invisible: true,
  },
  {
    path: "/post/edit/:slug",
    name: "Edit Post",
    rtlName: "رد فعل الطاولة",
    icon: "tim-icons icon-notes",
    rtlMini: "در",
    component: PostForm,
    layout: "/control-panel",
    authenticated: true,
    // redirect: "/auth/login",
    invisible: true,
  },

  /**
   * Sweet Alert Test
   */
  // {
  //   collapse: true,
  //   name: "Components",
  //   rtlName: "المكونات",
  //   icon: "tim-icons icon-molecule-40",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       rtlName: "الحلو تنبيه",
  //       mini: "SA",
  //       rtlMini: "ومن",
  //       component: SweetAlert,
  //       layout: "/control-panel",
  //     },
  //   ],
  // },
];

const routes = [
  {
    path: "/",
    name: "Home page",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bank",
    component: Homepage,
    layout: "",
    authenticated: false,
    invisible: false,
  },
  {
    path: "/post/:slug",
    name: "Post detail",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bank",
    component: PostDetailPage,
    layout: "",
    authenticated: false,
    invisible: true,
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "هعذاتسجيل الدخول",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "",
    authenticated: false,
    invisible: true,
  },
  {
    path: "/register",
    name: "Register",
    rtlName: "هعذاتسجيل الدخول",
    icon: "tim-icons icon-chart-pie-36",
    component: Register,
    layout: "",
    authenticated: false,
    invisible: true,
  },
];

export default routes;
