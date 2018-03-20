import {combineReducers} from 'redux';
import noticiasReducer from './noticiasReducer';


const rootReducer = combineReducers({
     noticias: noticiasReducer,   
});


export default rootReducer;