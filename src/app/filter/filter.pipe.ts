import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../todo/model/todo.model";
import { validFilters } from "./filter.actions";

@Pipe({
  name: "filterTodo"
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case "pending":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
}
