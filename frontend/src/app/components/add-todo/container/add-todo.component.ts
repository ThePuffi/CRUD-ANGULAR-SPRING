import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  public todo_form: FormGroup;

  constructor(private fb: FormBuilder, private http: TodoService) {
    this.todo_form = this.fb.group({
      title: null,
      content: null
    })

   }

  async addTodo() {
    const service = this.http.create(this.todo_form.value);
    return lastValueFrom(service).then(
      () => {
        this.todo_form.reset();
      }
    )

  }
}

