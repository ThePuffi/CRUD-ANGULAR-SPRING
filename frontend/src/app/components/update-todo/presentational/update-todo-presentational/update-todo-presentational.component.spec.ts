import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoPresentationalComponent } from './update-todo-presentational.component';

describe('UpdateTodoPresentationalComponent', () => {
  let component: UpdateTodoPresentationalComponent;
  let fixture: ComponentFixture<UpdateTodoPresentationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTodoPresentationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTodoPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
