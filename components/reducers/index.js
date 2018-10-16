import { combineReducers } from "redux";
import noticiasReducer from "./noticiasReducer";
import likesReducer from "./likesReducer";
import comentaNReducer from "./comentaNReducer";
import eventosReducer from "./eventosReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  noticias: noticiasReducer,
  likes: likesReducer,
  comentarios: comentaNReducer ,
  eventos: eventosReducer,
  user_profile: profileReducer,
});

export default rootReducer;