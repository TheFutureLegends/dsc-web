import { combineReducers } from "redux";

import { UserReducer } from "./reducers/user.reducer";
import { UIReducer } from "./reducers/ui.reducer";
import { PostReducer } from "./reducers/post.reducer";
import { CategoryReducer } from "./reducers/category.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  ui: UIReducer,
  post: PostReducer,
  category: CategoryReducer,
});

export default rootReducer;
