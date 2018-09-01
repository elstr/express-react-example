import { combineReducers } from "redux";
import users from "./users/reducer";
import groups from "./groups/reducer";

const rootReducer = combineReducers({
  users,
  groups
});

export default rootReducer;
