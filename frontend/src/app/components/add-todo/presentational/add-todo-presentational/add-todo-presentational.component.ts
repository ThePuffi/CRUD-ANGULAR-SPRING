import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-add-todo-presentational',
  templateUrl: './add-todo-presentational.component.html',
  styleUrls: []
})
export class AddTodoPresentationalComponent {

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
