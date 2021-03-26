import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { TodoListService } from 'src/app/services/todo-list-service';
import { AlertComponent } from 'src/app/shared/components/alert/alert-component';
import { Alert } from 'src/app/shared/models/alert';
import { TodoList } from 'src/app/shared/models/todo-list';

@Component({
  selector: 'create-task-todo-list',
  templateUrl: './create-task-todo-list.html',
  styleUrls: ['./create-task-todo-list.css']
})
export class CreateTaskTodoListComponent implements OnInit {

  @Input() todoId: number;

  cadastroTask: FormGroup;

  showNHide= true;

  get c() {
    return this.cadastroTask.controls;
  }

  get task(): FormArray {
    return this.cadastroTask.get('task') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private todoListService: TodoListService,
              private router: Router,
              public dialog: MatDialog){ }

  ngOnInit(){
    this.cadastroTask = this.fb.group({
      nameList: ['Default', [Validators.required, Validators.minLength(2)]],
      task: this.fb.array ([this.createTaskGroup()])
    });
  }

  ShowNHide() {
    this.showNHide = !this.showNHide;
  }

  createTaskGroup() {
    return this.fb.group({
      nameTask: ['', [Validators.required, Validators.minLength(2)]],
      isDone: false
    });
  }

  submit(): void {
    this.cadastroTask.markAllAsTouched();
    if(this.cadastroTask.invalid){
      return;
    }
    const todoList = this.cadastroTask.getRawValue() as TodoList;
    this.saving(todoList, this.todoId);
  }

  addTask() {
    this.task.push(this.createTaskGroup());
  }

  private saving(todoList: TodoList, todoId: number): void{
    this.todoListService.saveTask(todoList, todoId).subscribe(() => {
      const dialogRef = this.dialog.open(AlertComponent);
      dialogRef.afterClosed().subscribe((option: boolean) => {
        if(option){
          this.router.navigateByUrl('todolist');
        }
      })
    },
    () => {
      const config = {
        data: {
          title: 'Erro ao salvar a lista',
          description: 'Não foi possivel salvar a lista, favor tentar novamente.',
          btnSucess: 'Fechar'
        } as Alert
      };
      this.dialog.open(AlertComponent, config);
    });
  }

}
