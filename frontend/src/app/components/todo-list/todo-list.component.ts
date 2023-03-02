import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom, Observable, switchMap, } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { AddTodoComponent } from '../add-todo/container/add-todo.component';
import { UpdateTodoComponent } from '../update-todo/container/update-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [],
})
export class TodoListComponent {
  public todoList: Observable<Todo[]>;
  constructor(private http: TodoService, public dialog: MatDialog) {
    this.todoList = TodoService.refresh$.pipe(switchMap(_ => this.http.getAll()));
  }

  openAddDialog() {
    this.dialog.open(AddTodoComponent);
  }

  update(todo: Todo) {
    this.dialog.open(UpdateTodoComponent, {
      data: todo,
    })
  }

  async delete(todo: Todo) {
    const service = this.http.delete(todo.id);
    return lastValueFrom(service).then(
      () => {
        TodoService.refresh$.next(false);
      }
    )
  }
  
  //bei neuem Objekt wird nicht die gesamte Liste neugerendert, sondern nur das Objekt
  trackByTodoTitle(index: number, todo: Todo): string {
    return todo.title && todo.content;
  }
}
