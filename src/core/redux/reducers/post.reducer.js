import {
  SET_POSTS_WITH_PAGINATION,
  SET_POSTS_TO_DISPLAY,
  SET_POST_DETAIL,
  SET_MORE_POSTS,
  SET_LIST_OF_POST,
  SET_EDIT_POST,
  DELETE_POST,
} from "../types/post.types";

import { mergeArrays, filterArrays } from "../../../utilities/index.js";

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
      return {
        ...state,
        postList: filterArrays(state.postList, action.payload),
      };
    default:
      return state;
  }
}
