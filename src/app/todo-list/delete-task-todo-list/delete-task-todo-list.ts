import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list-service';

@Component({
  selector: 'delete-task-todo-list',
  templateUrl: './delete-task-todo-list.html',
  styleUrls: ['./delete-task-todo-list.css']
})
export class DeleteTaskTodoListComponent implements OnInit {

  @Input() taskId:number;

  constructor(private todoListService: TodoListService,
              private router: Router){ }

  ngOnInit(){

  }

  deleteTask(id:number): void{
    this.todoListService.removeTask(id).subscribe(() => this.router.navigateByUrl('todolist'));
  }

}
