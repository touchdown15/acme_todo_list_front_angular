import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'todo-list-alert',
  templateUrl: './alert-component.html',
  styleUrls: ['./alert-component.css']
})
export class AlertComponent implements OnInit {

  btnSucess = 'Ok';
  btnCancel = 'Cancelar';
  haveBtnClose = false;


  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
