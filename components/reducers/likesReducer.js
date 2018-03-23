import { FETCH_LIKES } from "../actions/";

function likesReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_LIKES:
      return {...action.payload.data, ...state};
    default:
      return state;
  }
}

export default likesReducer;
