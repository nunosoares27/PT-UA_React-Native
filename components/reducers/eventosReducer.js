import { FETCH_EVENTOS } from "../actions/";

function eventosReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_EVENTOS:
      return [...action.payload.data];
    default:
      return state;
  }
}

export default eventosReducer;
