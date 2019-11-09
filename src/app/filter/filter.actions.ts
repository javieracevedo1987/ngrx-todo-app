import { Action } from "@ngrx/store";
export type validFilters = "all" | "pending" | "completed";

export const SET_FILTRO = "[Filter] Set filtro";

export class SetFiltroAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filter: validFilters) {}
}

export type actions = SetFiltroAction;
