import {
  SET_POSTS_WITH_PAGINATION,
  SET_POSTS_TO_DISPLAY,
  SET_POST_DETAIL,
  SET_MORE_POSTS,
  SET_LIST_OF_POST,
  SET_EDIT_POST,
  DELETE_POST,
} from "../types/post.types";

import { LOADING_DATA, STOP_LOADING_DATA } from "../types/ui.types.js";
import axios from "axios";
// react component used to create sweet alerts
import Swal from "sweetalert2";
// authorization header variables
import { getAuthorizationHeaders } from "../../../variables/api.js";

export const getLatestPostWithPagination = (latest, asc, limit, page) => async (
  dispatch
) => {
  dispatch({ type: LOADING_DATA });
  try {
    let res = await axios.get(
      `/posts?latest=${latest}&asc=${asc}&limit=${limit}&page=${page}`
    );

    dispatch({ type: SET_POSTS_WITH_PAGINATION, payload: res.data });

    dispatch({ type: SET_POSTS_TO_DISPLAY });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_DATA });
};

export const getPostDetail = (slug) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  try {
    let res = await axios.get(`/posts/${slug}`);

    dispatch({ type: SET_POST_DETAIL, payload: res.data.post });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_DATA });
};

export const getMorePostsWithSameCategory = (postId, category) => async (
  dispatch
) => {
  dispatch({ type: LOADING_DATA });
  try {
    let res = await axios.get(
      `/posts/${postId}/getMorePostsWithSameCategory/${category}`
    );

    dispatch({ type: SET_MORE_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: STOP_LOADING_DATA });
};

export const getPostListDataTable = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });

  try {
    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }

  dispatch({ type: STOP_LOADING_DATA });
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

  dispatch({ type: LOADING_DATA });

  try {
    let res = await axios.get(`/posts/edit/${id}`, getAuthorizationHeaders());

    dispatch({ type: SET_EDIT_POST, payload: res.data });

    Swal.close();

    history.push(`/control-panel/post/edit/${res.data.slug}`);
  } catch (error) {
    Swal.close();

    console.log(error);
  }

  dispatch({ type: STOP_LOADING_DATA });
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
    let data = {
      title: formData.title,
      imageFile: formData.imageFile,
      description: formData.description,
      category: formData.category.value,
    };

    await axios.post("/posts/create", data, getAuthorizationHeaders());

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
    let data = {
      title: formData.title,
      imageFile: formData.imageFile,
      description: formData.description,
      category: formData.category.value,
    };

    await axios.patch(`/posts/update/${id}`, data, getAuthorizationHeaders());

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
  dispatch({ type: LOADING_DATA });

  dispatch({ type: DELETE_POST, payload: item });

  try {
    await axios.delete("/posts/delete/" + item._id, getAuthorizationHeaders());

    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });

    dispatch({ type: STOP_LOADING_DATA });

    history.push("/control-panel/post-list");
  } catch (error) {
    console.log(error);
  }

  dispatch({ type: STOP_LOADING_DATA });
};
