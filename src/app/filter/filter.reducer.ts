import { validFilters, actions, SET_FILTRO } from "./filter.actions";

const initialState: validFilters = "all";

export function filterReducer(state = initialState, action: actions) {
  switch (action.type) {
    case SET_FILTRO:
      return action.filter;
    default:
      return state;
  }
}
