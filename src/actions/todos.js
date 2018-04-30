import * as actionTypes from '../constants/actionTypes';

let nextTodoId = 0;

export const addTodo = ({title}) => {
  return {type: actionTypes.ADD_TODO, id: nextTodoId++, title: title};
};

export const deleteTodo = (id) => {
  return {type: actionTypes.DELETE_TODO, id: id};
};

export const updateTodo = ({id, title}) => {
   return {type: actionTypes.UPDATE_TODO, id: id, title: title};
};

export const toggleTodo = (id) => {
   return {type: actionTypes.TOGGLE_TODO, id: id};
};