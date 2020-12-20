import {
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
} from "../types/user.types";
import { LOADING_UI, SET_ERRORS, STOP_LOADING_UI } from "../types/ui.types";
import axios from "axios";
import { getAuthorizationHeaders } from "../../../variables/api.js";
import { cookies, authorizationCookieName } from "../../../variables/cookie.js";
import { getPostListDataTable } from "./post.action.js";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

export const loginUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  Swal.fire({
    position: "center",
    title: "Send data to server",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    let res = await axios.post(`/auth/signin`, userData);

    setAuthorizationHeader(res.data.accessToken.token);

    // getPostListDataTable();

    dispatch({ type: SET_USER, payload: { credential: res.data } });

    Swal.close();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Good job!",
      text: "You have logged in!",
      showConfirmButton: false,
      timer: 2000,
    });

    setInterval(() => {
      history.push("/");
    }, 1900);

    // history.push("/");
  } catch (error) {
    Swal.close();

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.title,
      text: error.response.data.message,
      showConfirmButton: false,
      timer: 2000,
    });

    dispatch({ type: SET_ERRORS, payload: { login: "Something went wrong" } });
  }
};

export const logoutUser = () => (dispatch) => {
  cookies.remove(authorizationCookieName, { path: "/" });

  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getAuthUserData = () => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    let res = await axios.get(`/users/profile`, getAuthorizationHeaders());

    if (res) {
      // getPostListDataTable();

      dispatch({
        type: SET_USER,
        payload: { credential: res.data },
      });

      dispatch({ type: SET_AUTHENTICATED });
    }
  } catch (error) {
    cookies.remove(authorizationCookieName, { path: "/" });

    dispatch({ type: SET_UNAUTHENTICATED });
  }
};

export const signupUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  Swal.fire({
    position: "center",
    title: "Send data to server",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  // let keys = Object.keys(userData);

  // delete userData[keys[keys.length - 1]];

  try {
    await axios.post(`/auth/signup`, userData);

    Swal.close();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: "You can now login with your registered email!",
      showConfirmButton: false,
      timer: 2000,
    });

    setInterval(() => {
      history.push("/auth/login");
    }, 1900);
  } catch (error) {
    // console.log(error.response.data.message);

    dispatch({ type: STOP_LOADING_UI });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.title,
      text: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });

    dispatch({ type: SET_ERRORS, payload: { signup: error.message } });
  }
};

const setAuthorizationHeader = (token) => {
  cookies.set(authorizationCookieName, token, { path: "/" });
};
