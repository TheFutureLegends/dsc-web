import {
  LOADING_CATEGORIES,
  STOP_LOADING_CATEGORIES,
  SET_CATEGORIES,
} from "../types/category.types.js";

const initialState = {
  loading: true,
  categoryList: [],
};

export function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_CATEGORIES:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING_CATEGORIES:
      return {
        ...state,
        loading: false,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload,
      };

    default:
      return state;
  }
}
