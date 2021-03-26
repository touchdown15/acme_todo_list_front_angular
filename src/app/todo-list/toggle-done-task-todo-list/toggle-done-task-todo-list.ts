import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list-service';

@Component({
  selector: 'toggle-done-task-todo-list',
  templateUrl: './toggle-done-task-todo-list.html',
  styleUrls: ['./toggle-done-task-todo-list.css']
})
export class ToggleDoneTaskTodoListComponent implements OnInit {

  @Input() taskId:number;
  @Input() taskName:string;
  @Input() isDoneTask:boolean;

  constructor(private todoListService: TodoListService,
              private router: Router){ }

  ngOnInit(){

  }

  toggleTask(){
    this.isDoneTask = !this.isDoneTask;
    const done = String(this.isDoneTask);
    this.toggleDoneTask(done, this.taskId);
  }

  toggleDoneTask(done: string, id: number): void{
    this.todoListService.toggleDoneTask(done, id).subscribe(() => this.router.navigateByUrl('todolist'));
  }

}
