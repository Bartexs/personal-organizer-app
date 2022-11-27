import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskControllerComponent } from './user-task-controller.component';

describe('UserTaskControllerComponent', () => {
  let component: UserTaskControllerComponent;
  let fixture: ComponentFixture<UserTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTaskControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
