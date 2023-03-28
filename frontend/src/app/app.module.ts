import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/container/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/container/update-todo.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoPresentationalComponent } from "./components/add-todo/presentational/add-todo-presentational/add-todo-presentational.component";
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdateTodoPresentationalComponent } from "./components/update-todo/presentational/update-todo-presentational/update-todo-presentational.component";

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        AddTodoComponent,
        UpdateTodoComponent,
        AddTodoPresentationalComponent,
        UpdateTodoPresentationalComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule
        
    ]
})
export class AppModule {}
