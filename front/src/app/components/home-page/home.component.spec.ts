import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTaskControllerComponent } from '../user-task-feature/user-task-controller/user-task-controller.component';
import { CreateNewTaskSimplifiedComponent } from '../user-task-feature/user-task-creating/create-new-task-simplified/create-new-task-simplified.component';
import { UserTaskHeaderComponent } from '../user-task-feature/user-task-date-picker/user-task-header.component';
import { UserTasksDateCompletedListComponent } from '../user-task-feature/user-tasks-date-completed-list/user-tasks-date-completed-list.component';
import { UserTasksDateScheduledListComponent } from '../user-task-feature/user-tasks-date-scheduled-list/user-tasks-date-scheduled-list.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, 
        UserTaskControllerComponent, 
        UserTaskHeaderComponent, 
        CreateNewTaskSimplifiedComponent, 
        UserTasksDateScheduledListComponent, 
        UserTasksDateCompletedListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
