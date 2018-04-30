import * as actionTypes from '../constants/actionTypes';

const MAX_LENGTH = 100;

const initialState = {
   items: [],
   error: null
};

export function todos(state = initialState, action) {
   switch (action.type) {
      case actionTypes.ADD_TODO:
         let duplicate = state.items.find(item => item.title === action.title);
         if (duplicate) {
            return {
               ...state,
               error: `${action.type}: The todo with title "${action.title}" already exists`
            }
         }
         if (action.title.length > MAX_LENGTH) {
            return {
               ...state,
               error: `${action.type}: Max todo length limit is ${MAX_LENGTH}. Try again`
            }
         }
         return {
            ...state,
            items: [...state.items,
               {
                  _id: action.id,
                  title: action.title,
                  completed: false
               }
            ],
            error: null
         };

      case actionTypes.DELETE_TODO:
         return {
            ...state,
            items: state.items.filter(item => item._id !== action.id)
         };

      case actionTypes.UPDATE_TODO:
         let check = state.items.find(item => item.title === action.title && item._id !== action.id);
         if (check) {
            return {
               ...state,
               error: `${action.type}: The todo with title "${action.title}" already in list`
            }
         }
         if (action.title.length > MAX_LENGTH) {
            return {
               ...state,
               error: `${action.type}: Max todo length limit is ${MAX_LENGTH}. Try again`
            }
         }
         return {
            ...state,
            items: state.items.map(item => (
               item._id === action.id
                  ? {...item, title: action.title}
                  : item
            ))
         };

      case actionTypes.TOGGLE_TODO:
         return {
            ...state,
            items: state.items.map(item => (
               item._id === action.id
                  ? {...item, completed: !item.completed}
                  : item
            ))
         };

      default:
         return state;
   }
}