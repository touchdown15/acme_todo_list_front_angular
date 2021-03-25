import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../../models/alert';

@Component({
  selector: 'todo-list-alert',
  templateUrl: './alert-component.html',
  styleUrls: ['./alert-component.css']
})
export class AlertComponent implements OnInit {

  alert = {
    title: 'Sucesso!',
    description: 'A Lista de tarefas foi salva com sucesso!',
    btnSucess: 'Ok',
    btnCancel: 'Cancelar',
    haveBtnClose: false
  } as Alert;



  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit(): void {
    if(this.data){
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description;
      this.alert.btnSucess = this.data.btnSucess || this.alert.btnSucess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.haveBtnClose = this.data.haveBtnClose || this.alert.haveBtnClose;
    }

  }

}
