import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material-module';
import { CreateTodoListComponent } from './create-todo-list/create-todo-list';
import { ShowTodoListComponent } from './show-all-todo-list/show-all-todo-list';
import { DeleteTaskTodoListComponent } from './delete-task-todo-list/delete-task-todo-list';
import { CreateTaskTodoListComponent } from './create-task-todo-list/create-task-todo-list';


@NgModule({
  declarations: [
    CreateTodoListComponent,
    ShowTodoListComponent,
    DeleteTaskTodoListComponent,
    CreateTaskTodoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TodoModule { }
