import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserTaskControllerComponent } from './user-task-controller.component';
import { NotificationsComponent } from 'src/app/notifications/notifications-list/notifications-list.component';
import { UserTasksDateCompletedListComponent } from '../user-tasks-date-completed-list/user-tasks-date-completed-list.component';
import { UserTasksDateScheduledListComponent } from '../user-tasks-date-scheduled-list/user-tasks-date-scheduled-list.component';
import { CreateNewTaskSimplifiedComponent } from '../user-task-creating/create-new-task-simplified/create-new-task-simplified.component';
import { UserTaskHeaderComponent } from '../user-task-date-picker/user-task-header.component';

describe('UserTaskControllerComponent', () => {
  let component: UserTaskControllerComponent;
  let fixture: ComponentFixture<UserTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UserTaskControllerComponent,
        NotificationsComponent,
        UserTasksDateCompletedListComponent,
        UserTasksDateScheduledListComponent,
        CreateNewTaskSimplifiedComponent,
        UserTaskHeaderComponent,
       ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
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
