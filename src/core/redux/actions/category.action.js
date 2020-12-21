import {
  LOADING_CATEGORIES,
  STOP_LOADING_CATEGORIES,
  SET_CATEGORIES,
} from "../types/category.types";

import axios from "axios";

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: LOADING_CATEGORIES });

  try {
    let res = await axios.get("/categories");

    dispatch({ type: SET_CATEGORIES, payload: res.data.categories });
  } catch (error) {}

  dispatch({ type: STOP_LOADING_CATEGORIES });
};
