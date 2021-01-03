import { combineReducers } from "redux";

import { UserReducer } from "./reducers/user.reducer";
import { UIReducer } from "./reducers/ui.reducer";
import { PostReducer } from "./reducers/post.reducer";
import { CategoryReducer } from "./reducers/category.reducer";
// import { BotReducer } from "./reducers/bot.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  ui: UIReducer,
  post: PostReducer,
  category: CategoryReducer,
  // bot: BotReducer,
});

export default rootReducer;
