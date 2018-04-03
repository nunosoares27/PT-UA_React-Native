import { FETCH_COMENTARIOS_NOTICIAS, COMENTA_NOTICIA } from "../actions/";

function comentaNReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_COMENTARIOS_NOTICIAS:
       return [...action.payload.data];
    case COMENTA_NOTICIA:
      return [...action.payload.data];
    default:
      return state;
  }
}

export default comentaNReducer;
