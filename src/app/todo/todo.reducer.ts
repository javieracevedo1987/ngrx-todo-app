import {
  Actions,
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO
} from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Practicar clean code");
const todo2 = new Todo("Hacer testing unitario");

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: Actions): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case TOGGLE_ALL_TODO:
      return state.map(todo => {
        return {
          ...todo,
          completed: action.completed
        };
      });
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text
          };
        } else {
          return todo;
        }
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id != action.id);
    default:
      return state;
  }
}
