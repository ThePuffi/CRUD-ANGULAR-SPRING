import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-update-todo-presentational',
  templateUrl: './update-todo-presentational.component.html',
  styleUrls: ['./update-todo-presentational.component.scss']
})
export class UpdateTodoPresentationalComponent {

  @Input()
  set add_todo_form(data: FormGroup){
    this.todo_form = data
  }
  todo_form = this.add_todo_form;

  @Output() newTodo = new EventEmitter<Todo>();

  submit(){
    this.newTodo.emit(this.todo_form.value);
  }

}
