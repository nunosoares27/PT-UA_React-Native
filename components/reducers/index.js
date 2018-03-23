import { combineReducers } from "redux";
import noticiasReducer from "./noticiasReducer";
import likesReducer from "./likesReducer";

const rootReducer = combineReducers({
  noticias: noticiasReducer,
  likes: likesReducer
});

export default rootReducer;