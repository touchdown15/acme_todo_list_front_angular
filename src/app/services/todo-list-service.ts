import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TodoList } from '../shared/models/todo-list';


const url = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http:HttpClient) { }

  save(todolist : TodoList): Observable<TodoList> {
    return this.http.post<TodoList>(url+'api/v1/todolist', todolist);
  }

  showAll(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(url+'api/v1/todolist');
  }


}
