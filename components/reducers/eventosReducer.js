import { FETCH_EVENTOS, EVENTO_DETAIL } from "../actions/";

function eventosReducer(state = [], action = []) {
  switch (action.type) {
    case FETCH_EVENTOS:
      return [...action.payload.data];
    case EVENTO_DETAIL:
      return ( 
        [
        {...state
        }, {
          ...action.payload.data
        }
      ]
  )
    ;
    default:
      return state;
  }
}


export default eventosReducer;
