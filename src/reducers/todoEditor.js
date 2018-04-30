import * as actionTypes from '../constants/actionTypes';

const initialState = {
   editTodo: false,
   editTodoId: null
};

export function todoEditor(state = initialState, action) {
   switch (action.type) {
      case actionTypes.START_TODO_EDIT:
         return {
            ...state,
            editTodo: true,
            editTodoId: action.id
         };

      case actionTypes.STOP_TODO_EDIT:
         return {
            ...state,
            editTodo: false,
            editTodoId: null
         };

      default:
         return state
   }
}