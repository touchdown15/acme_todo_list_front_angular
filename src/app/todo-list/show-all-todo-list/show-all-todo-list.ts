import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list-service';
import { TodoList } from 'src/app/shared/models/todo-list';

@Component({
  selector: 'show-all-todo-list',
  templateUrl: './show-all-todo-list.html',
  styleUrls: ['./show-all-todo-list.css']
})
export class ShowTodoListComponent implements OnInit {

  todoList: TodoList[];

  constructor(private todoListService: TodoListService,
              private router: Router){ }

  ngOnInit(){
    this.todoListService.showAll().subscribe((todoList: TodoList[]) => this.todoList = todoList);
  }

  deleteTask(id:number): void{
    this.todoListService.removeTask(id).subscribe(() => this.router.navigateByUrl('todolist'));
  }

}
