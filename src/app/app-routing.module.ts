import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTodoListComponent } from './todo-list/create-todo-list/create-todo-list';
import { ShowTodoListComponent } from './todo-list/show-all-todo-list/show-all-todo-list';

import { TodoModule } from './todo-list/todo.module';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'todolist',
    pathMatch: 'full'
  },
  {
    path: 'todolist',
    children: [
      {
        path: '',
        component: ShowTodoListComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: CreateTodoListComponent
          }
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'todolist'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    TodoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
