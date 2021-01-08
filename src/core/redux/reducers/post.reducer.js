import {
  SET_POSTS_WITH_PAGINATION,
  SET_POSTS_TO_DISPLAY,
  SET_POST_DETAIL,
  SET_MORE_POSTS,
  SET_LIST_OF_POST,
  SET_EDIT_POST,
  DELETE_POST,
} from "../types/post.types";

import { mergeArrays } from "../../../utilities/index.js";

let initialState = {
  postsWithPagination: {},
  postsToDisplay: [],
  postDetail: {},
  morePostsWithSameCategory: [],
  post: {},
  postList: [],
};

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS_WITH_PAGINATION:
      return {
        ...state,
        postsWithPagination: action.payload,
      };

    case SET_POSTS_TO_DISPLAY:
      return {
        ...state,
        postsToDisplay: mergeArrays(
          state.postsToDisplay,
          state.postsWithPagination.posts
        ),
      };
    case SET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload,
      };
    case SET_MORE_POSTS:
      return {
        ...state,
        morePostsWithSameCategory: action.payload,
      };
    case SET_LIST_OF_POST:
      return {
        ...state,
        postList: action.payload,
      };
    case SET_EDIT_POST:
      return {
        ...state,
        post: action.payload,
      };

    case DELETE_POST:
      console.log(
        "Post reducer Delete post before delete: (PostList) -> ",
        state.postList
      );

      let newArray = state.postList.filter(
        (item) => item._id !== action.payload._id
      );

      console.log("Post reducer Delete post: (NewArray) -> ", newArray);

      return {
        ...state,
        postList: newArray,
      };
    default:
      return state;
  }
}
