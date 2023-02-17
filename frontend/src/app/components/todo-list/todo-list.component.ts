import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, concat, forkJoin, map, merge, Observable, Subject, tap, toArray, withLatestFrom, zip } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { AddTodoComponent } from '../add-todo/container/add-todo.component';
import { AddTodoPresentationalComponent } from '../add-todo/presentational/add-todo-presentational/add-todo-presentational.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  dialogData!: Observable<Todo>;
  public todoList: Observable<Todo[]>;
  constructor(private http: TodoService, public dialog: MatDialog) {
    this.todoList = this.http.getAll();
  }

  openAddDialog() {
    
    let dialogRef = this.dialog.open(AddTodoComponent);
    this.dialogData = dialogRef.afterClosed();

    }
  
  //bei neuem Objekt wird nicht die gesamte Liste neugerendert, sondern nur das Objekt
  trackByTodoTitle(index: number, todo: Todo): string {
    return todo.title;
  }
}
