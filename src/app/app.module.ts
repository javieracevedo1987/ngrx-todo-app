import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// NgRx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducers } from "./app.reducers";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoFooterComponent } from "./todo/todo-footer/todo-footer.component";
import { TodoAddComponent } from "./todo/todo-add/todo-add.component";
import { TodoItemComponent } from "./todo/todo-item/todo-item.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { environment } from "src/environments/environment";
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
