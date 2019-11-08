import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Todo } from "../model/todo.model";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import {
  ToggleTodoAction,
  EditTodoAction,
  RemoveTodoAction
} from "../todo.actions";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild("txtEditInput", { static: true }) txtEditInput: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;

  isEditing: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe(check => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.isEditing = true;

    setTimeout(() => {
      this.txtEditInput.nativeElement.select();
    }, 1);
  }

  onBlurEdit() {
    this.isEditing = false;

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  remove() {
    const action = new RemoveTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
