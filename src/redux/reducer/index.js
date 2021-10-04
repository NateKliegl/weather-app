import { combineReducers } from "redux";
import searchReducer from "./search.reducer";
import userReducer from "./user.reducer";
import locationReducer from "./locations.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  location: locationReducer,
});
export default rootReducer;
