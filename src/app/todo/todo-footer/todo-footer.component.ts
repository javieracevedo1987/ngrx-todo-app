import { Component, OnInit } from "@angular/core";
import { validFilters, SetFiltroAction } from "src/app/filter/filter.actions";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Todo } from "../model/todo.model";
import { ClearCompletedTodoAction } from "../todo.actions";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  validFilters: validFilters[] = ["all", "pending", "completed"];
  selectedFilter: validFilters;
  totalPending: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.totalPending = this.allPendingTodos(state.todos);
      this.selectedFilter = state.filter;
    });
  }

  onChangeFilter(filter: validFilters) {
    const action = new SetFiltroAction(filter);
    this.store.dispatch(action);
  }

  allPendingTodos(todos: Todo[]) {
    return todos.filter(todo => !todo.completed).length;
  }

  clearCompletedTodos() {
    const action = new ClearCompletedTodoAction();
    this.store.dispatch(action);
  }
}
