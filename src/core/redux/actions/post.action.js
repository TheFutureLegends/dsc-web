import {
  SET_POST,
  SET_POSTS,
  SET_POPULAR_POSTS,
  SET_LATEST_POSTS,
  SET_LIST_OF_POST,
  LOADING_POST,
  STOP_LOADING_POST,
  EDIT_POST,
  DELETE_POST,
} from "../types/post.types";
import axios from "axios";
import Swal from "sweetalert2";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
import { getAuthorizationHeaders } from "../../../variables/api.js";

const hideAlert = () => {
  return null;
};

export const getPost = (slug, history) => async (dispatch) => {
  try {
    let res = await axios.get(`/posts/${slug}`);
    dispatch({ type: SET_POST, payload: res.data });
    history.push(`/posts/${slug}`);
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithPagination = (limit, page) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(`/posts?latest=true&limit=${limit}&page=${page}`);

    dispatch({ type: SET_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_POST });
};

export const getLatestPost = (limit, asc) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(`/posts?latest=true&limit=${limit}&asc=${asc}`);

    dispatch({ type: SET_LATEST_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_POST });
};

export const getMostPopularPosts = (limit, asc) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(
      `/posts?latest=true?sortBy=visit&limit=${limit}&asc=${asc}`
    );

    dispatch({ type: SET_POPULAR_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_POST });
};

export const getPostListDataTable = () => async (dispatch) => {
  try {
    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }

  dispatch({ type: STOP_LOADING_POST });
};

/**
 * Get post detail to prepare updating
 *
 * @param {*} id
 * @param {*} history
 */
export const getPostForEditing = (id, history) => async (dispatch) => {
  Swal.fire({
    position: "center",
    title: "Getting data from server",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  dispatch({ type: LOADING_POST });

  try {
    let res = await axios.get(`/posts/edit/${id}`, getAuthorizationHeaders());

    dispatch({ type: EDIT_POST, payload: res.data });

    Swal.close();

    history.push(`/control-panel/post/edit/${res.data.slug}`);
  } catch (error) {
    Swal.close();

    console.log(error);
  }

  dispatch({ type: STOP_LOADING_POST });
};

export const createNewPost = (formData, history) => async (dispatch) => {
  Swal.fire({
    position: "center",
    title: "Send data to server",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    await axios.post("/posts/create", formData, getAuthorizationHeaders());

    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });

    Swal.close();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: `You have created new post.\nYou will be redirect to post list in a moment!`,
      showConfirmButton: false,
      timer: 3000,
      didClose: () => {
        history.push("/control-panel/post-list");
      },
    });

    // setInterval(() => history.push("/control-panel/post-list"), 2900);
  } catch (error) {
    Swal.close();

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.title,
      text: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const updatePost = (id, formData, history) => async (dispatch) => {
  Swal.fire({
    position: "center",
    title: "Send data to server",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    await axios.patch(
      `/posts/update/${id}`,
      formData,
      getAuthorizationHeaders()
    );

    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });

    Swal.close();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: `You have updated.\nYou will be redirect to post list in a moment!`,
      showConfirmButton: false,
      timer: 3000,
      didClose: () => {
        history.push("/control-panel/post-list");
      },
    });
  } catch (error) {
    Swal.close();

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.title,
      text: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const deletePost = (item, history) => async (dispatch) => {
  dispatch({ type: LOADING_POST });

  dispatch({ type: DELETE_POST, payload: item });

  try {
    await axios.delete("/posts/delete/" + item._id, getAuthorizationHeaders());

    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });

    dispatch({ type: STOP_LOADING_POST });

    history.push("/control-panel/post-list");
  } catch (error) {
    console.log(error);
  }

  dispatch({ type: STOP_LOADING_POST });
};
