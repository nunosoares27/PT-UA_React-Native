import { FETCH_NOTICIAS } from "../actions/";

function noticiasReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_NOTICIAS:
      return [...action.payload.data];
    default:
      return state;
  }
}

export default noticiasReducer;
