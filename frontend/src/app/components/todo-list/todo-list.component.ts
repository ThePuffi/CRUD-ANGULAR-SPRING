import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, switchMap, } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { AddTodoComponent } from '../add-todo/container/add-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todoList: Observable<Todo[]>;
  constructor(private http: TodoService, public dialog: MatDialog) {
    this.todoList = TodoService.refresh$.pipe(switchMap(_ => this.http.getAll()));
  }

  openAddDialog() {
    this.dialog.open(AddTodoComponent);
  }
  
  //bei neuem Objekt wird nicht die gesamte Liste neugerendert, sondern nur das Objekt
  trackByTodoTitle(index: number, todo: Todo): string {
    return todo.title;
  }
}
