import { FETCH_COMENTARIOS_NOTICIAS, COMENTA_NOTICIA } from "../actions/";

function comentaNReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_COMENTARIOS_NOTICIAS:
       return [...action.payload.data, ...state];
    case COMENTA_NOTICIA:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}

export default comentaNReducer;
