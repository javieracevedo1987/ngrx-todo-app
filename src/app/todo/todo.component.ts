import { Component, OnInit } from "@angular/core";
import { AppState } from "../app.reducers";
import { Store } from "@ngrx/store";
import { ToggleAllTodoAction } from "./todo.actions";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styles: []
})
export class TodoComponent implements OnInit {
  isAllChecked: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  toggleAll() {
    this.isAllChecked = !this.isAllChecked;
    const action = new ToggleAllTodoAction(this.isAllChecked);
    this.store.dispatch(action);
  }
}
