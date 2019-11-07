import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { AddTodoAction } from "../todo.actions";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styles: []
})
export class TodoAddComponent implements OnInit {
  todoInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.todoInput = new FormControl("", Validators.required);
  }

  addTodo() {
    if (this.todoInput.invalid) {
      return;
    }

    const action = new AddTodoAction(this.todoInput.value);
    this.store.dispatch(action);

    this.todoInput.reset();
  }
}
