import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-update-todo-presentational',
  templateUrl: './update-todo-presentational.component.html',
  styleUrls: []
})
export class UpdateTodoPresentationalComponent {

  @Input()
  set update_todo_form(data: FormGroup){
    this.todoform = data
  }
  todoform = this.update_todo_form;

  @Output() updatedTodo = new EventEmitter<Todo>();

  submit(){
    this.updatedTodo.emit(this.todoform.value);
  }

}
