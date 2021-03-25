import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material-module';
import { CreateTodoListComponent } from './create-todo-list/create-todo-list';
import { ShowTodoListComponent } from './show-all-todo-list/show-all-todo-list';


@NgModule({
  declarations: [
    CreateTodoListComponent,
    ShowTodoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TodoModule { }
