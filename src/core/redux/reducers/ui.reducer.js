import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  LOADING_DATA,
  STOP_LOADING_DATA,
} from "../types/ui.types";

const initialState = {
  loading: false,
  errors: null,
};

export function UIReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_DATA:
      return {
        ...state,
        loading: false,
        
      };
    default:
      return state;
  }
}
