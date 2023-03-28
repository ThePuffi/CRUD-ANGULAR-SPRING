import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom, Observable, switchMap, tap } from 'rxjs';
import { MultiTodo } from 'src/app/models/multiTodo';
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
  public selectedItems: MultiTodo = { todoList: [] };
  constructor(private http: TodoService, public dialog: MatDialog) {
    this.todoList = TodoService.refresh$.pipe(
      switchMap((_) => this.http.getAll())
    );
  }

  openAddDialog() {
    this.dialog.open(AddTodoComponent);
  }

  openUpdateDialog(todo: Todo) {
    this.dialog.open(UpdateTodoComponent, {
      data: todo,
    });
  }

  async delete(todo: Todo) {
    const service = this.http.delete(todo.id);
    return lastValueFrom(service).then(() => {
      TodoService.refresh$.next(false);
    });
  }

  selectItems(todo: Todo) {
    const index = this.selectedItems.todoList.indexOf(todo);
    if (index === -1) {
      this.selectedItems.todoList.push(todo);
    } else {
      this.selectedItems.todoList.splice(index, 1);
    }
  }

  deleteMultipleItems() {
    this.http.multipleDelete(this.selectedItems).subscribe((res) => {
      TodoService.refresh$.next(false);
    });
  }

  //bei neuem Objekt wird nicht die gesamte Liste neugerendert, sondern nur das Objekt
  trackByTodoTitle(index: number, todo: Todo): string {
    return todo.title && todo.content;
  }
}
