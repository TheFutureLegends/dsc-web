import {
  SET_POST_DETAIL,
  SET_MORE_POSTS,
  SET_POSTS,
  SET_LIST_OF_POST,
  LOADING_POST,
  STOP_LOADING_POST,
  SET_EDIT_POST,
  DELETE_POST,
} from "../types/post.types";
import axios from "axios";
// react component used to create sweet alerts
import Swal from "sweetalert2";
// authorization header variables
import { getAuthorizationHeaders } from "../../../variables/api.js";

export const getLatestPostWithPagination = (latest, asc, limit, page) => async (
  dispatch
) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(
      `/posts?latest=${latest}&asc=${asc}&limit=${limit}&page=${page}`
    );

    dispatch({ type: SET_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_POST });
};

export const getPostDetail = (slug) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(`/posts/${slug}`);

    dispatch({ type: SET_POST_DETAIL, payload: res.data.post });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_POST });
};

export const getMorePostsWithSameCategory = (category) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    let res = await axios.get(`/posts?latest=true&asc=false&limit=3&page=3`);

    dispatch({ type: SET_MORE_POSTS, payload: res.data.posts });
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

    dispatch({ type: SET_EDIT_POST, payload: res.data });

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
