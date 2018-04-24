import { FETCH_LIKES, GIVE_LIKE } from "../actions/";

function likesReducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_LIKES:
      return [...action.payload.data, ...state];
    case GIVE_LIKE:
    console.log(action.payload.data);
      return [...action.payload.data];
    default:
      return state;
  }
}

export default likesReducer;
