import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: []
})
export class UpdateTodoComponent {

  public todoform: FormGroup;

  constructor(private fb: FormBuilder, private http: TodoService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    
    this.todoform = this.fb.group({
      id: this.data.id,
      title: this.data.title,
      content: this.data.content
    })
   }

  async updateTodo() {
    const service = this.http.update(this.todoform.value);
    return lastValueFrom(service).then(
      () => {
        this.todoform.reset();
        TodoService.refresh$.next(false);
      }
    )
  }

}
