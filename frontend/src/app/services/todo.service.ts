import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../models/todo';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl + 'getAll');
  }

  create(data: Todo): Observable<Todo> {
    return this.http.post<Todo>(baseUrl + 'create', data);
  }

  update(data: Todo): Observable<Todo> {
    return this.http.put<Todo>(baseUrl + 'update', data);
  }

  delete(dataID: string): Observable<Todo> {
    return this.http.delete<Todo>(`${baseUrl}delete/${dataID}`);
  }
}
