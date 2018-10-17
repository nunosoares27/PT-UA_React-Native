import { IS_LOADING, FINISH_LOADING } from "../actions/";

function loadingReducer(state = {}, action = {}) {
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    case FINISH_LOADING:
      return  action.payload;
    default:
      return state;
  }
}

export default loadingReducer;