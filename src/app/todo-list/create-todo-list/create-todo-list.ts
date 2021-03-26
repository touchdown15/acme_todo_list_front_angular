import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list-service';
import { AlertComponent } from 'src/app/shared/components/alert/alert-component';
import { Alert } from 'src/app/shared/models/alert';
import { TodoList } from 'src/app/shared/models/todo-list';

@Component({
  selector: 'create-todo-list',
  templateUrl: './create-todo-list.html',
  styleUrls: ['./create-todo-list.css']
})
export class CreateTodoListComponent implements OnInit {

  cadastro: FormGroup;

  constructor(private fb: FormBuilder,
              private todoListService: TodoListService,
              private router: Router,
              public dialog: MatDialog){}

  get c() {
    return this.cadastro.controls;
  }

  get task(): FormArray {
    return this.cadastro.get('task') as FormArray;
  }

  ngOnInit(){
    this.cadastro = this.fb.group({
      nameList: ['', [Validators.required, Validators.minLength(2)]],
      task: this.fb.array ([this.createTaskGroup()])
    });
  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid){
      return;
    }
    const todoList = this.cadastro.getRawValue() as TodoList;
    this.saving(todoList);
  }

  addTask() {
    this.task.push(this.createTaskGroup());
  }

  createTaskGroup() {
    return this.fb.group({
      nameTask: ['', [Validators.required, Validators.minLength(2)]],
      isDone: false
    });
  }

  private saving(todoList: TodoList): void{
    this.todoListService.save(todoList).subscribe(() => {
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
