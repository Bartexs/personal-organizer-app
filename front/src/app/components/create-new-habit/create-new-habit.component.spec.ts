import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewHabitComponent } from './create-new-habit.component';

describe('CreateNewHabitComponent', () => {
  let component: CreateNewHabitComponent;
  let fixture: ComponentFixture<CreateNewHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewHabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
