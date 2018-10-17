import { IS_LOADING, FINISH_LOADING } from "../actions/";

function loadingReducer(state = {}, action = {}) {
  switch (action.type) {
    case IS_LOADING:
    console.log('start loading'+action.payload)
      return action.payload;
    case FINISH_LOADING:
    console.log('finish loading: '+action.payload)
      return  action.payload;
    default:
      return state;
  }
}

export default loadingReducer;