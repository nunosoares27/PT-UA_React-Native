import { combineReducers } from "redux";
import noticiasReducer from "./noticiasReducer";
import likesReducer from "./likesReducer";
import comentaNReducer from "./comentaNReducer";
import eventosReducer from "./eventosReducer";
import profileReducer from "./profileReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  noticias: noticiasReducer,
  likes: likesReducer,
  comentarios: comentaNReducer ,
  eventos: eventosReducer,
  user_profile: profileReducer,
  loading: loadingReducer,
});

export default rootReducer;