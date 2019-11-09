import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Todo } from "../model/todo.model";
import { validFilters } from "src/app/filter/filter.actions";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styles: []
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  todos: Todo[];
  filter: validFilters;

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }
}
