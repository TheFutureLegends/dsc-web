import {
  LOADING_POST,
  STOP_LOADING_POST,
  SET_POST_DETAIL,
  SET_POSTS,
  SET_LIST_OF_POST,
  SET_EDIT_POST,
  DELETE_POST,
} from "../types/post.types";

const initialState = {
  loading: true,
  posts: [],
  postDetail: {},
  post: {},
  postList: [],
};

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POST:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_POST:
      return {
        ...state,
        loading: false,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload,
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
      const item = action.payload;

      const newList = state.postList.filter((i) => i._id !== item._id);

      console.log("Reducer list: ", newList);

      return {
        ...state,
        postList: newList,
      };
    default:
      return state;
  }
}
