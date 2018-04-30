import {combineReducers} from 'redux';
import {todos} from './todos';
import {todoEditor} from "./todoEditor";

const rootReducer = combineReducers({
   todos,
   todoEditor
});

export default rootReducer;