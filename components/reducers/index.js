import { combineReducers } from "redux";
import noticiasReducer from "./noticiasReducer";
import likesReducer from "./likesReducer";
import comentaNReducer from "./comentaNReducer";
import eventosReducer from "./eventosReducer";

const rootReducer = combineReducers({
  noticias: noticiasReducer,
  likes: likesReducer,
  comentarios: comentaNReducer ,
  eventos: eventosReducer
});

export default rootReducer;