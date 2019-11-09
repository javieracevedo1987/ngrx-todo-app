import { Action } from "@ngrx/store";

export const ADD_TODO = "[TODO] Add todo";
export const TOGGLE_TODO = "[TODO] Toggle todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle all todo";
export const EDIT_TODO = "[TODO] Edit todo";
export const REMOVE_TODO = "[TODO] Remove todo";
export const CLEAR_COMPLETED_TODO = "[TODO] Clear completed todos";

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completed: boolean) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {}
}

export class RemoveTodoAction implements Action {
  readonly type = REMOVE_TODO;
  constructor(public id: number) {}
}

export class ClearCompletedTodoAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export type Actions =
  | AddTodoAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | ClearCompletedTodoAction;
