import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  public add_todo_form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.add_todo_form = this.fb.group({
      title: null,
      content: null
    })

   }

  submit() {

  }
}

