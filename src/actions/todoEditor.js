import * as actionTypes from '../constants/actionTypes';

export const startTodoEdit = id => {
   return {type: actionTypes.START_TODO_EDIT, id: id};
};

export const stopTodoEdit = () => {
   return {type: actionTypes.STOP_TODO_EDIT};
};