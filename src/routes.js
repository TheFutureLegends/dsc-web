/**
 * Main page for users
 */
import Homepage from "./views/homepage/Homepage.js";
import PostDetailPage from "./views/postDetail/PostDetail.js";

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
