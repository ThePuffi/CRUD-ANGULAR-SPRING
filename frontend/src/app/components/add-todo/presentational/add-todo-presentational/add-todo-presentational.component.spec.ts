import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoPresentationalComponent } from './add-todo-presentational.component';

describe('AddTodoPresentationalComponent', () => {
  let component: AddTodoPresentationalComponent;
  let fixture: ComponentFixture<AddTodoPresentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoPresentationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
