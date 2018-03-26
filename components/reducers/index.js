import { combineReducers } from "redux";
import noticiasReducer from "./noticiasReducer";
import likesReducer from "./likesReducer";
import comentaNReducer from "./comentaNReducer";

const rootReducer = combineReducers({
  noticias: noticiasReducer,
  likes: likesReducer,
  comentarios: comentaNReducer ,
});

export default rootReducer;