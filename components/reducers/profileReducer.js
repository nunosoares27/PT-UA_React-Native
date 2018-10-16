import { USER_PROFILE } from "../actions/";

function profileReducer(state = [], action = []) {
  switch (action.type) {
    case USER_PROFILE:
      return action.payload.data;
    ;
    default:
      return state;
  }
}


export default profileReducer;