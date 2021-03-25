import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'header-todo-list',
  templateUrl: './header-todo-list.html',
  styleUrls: ['./header-todo-list.scss']
})
export class HeaderTodoListComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;


  constructor() { }

  ngOnInit() {
  }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }


}
