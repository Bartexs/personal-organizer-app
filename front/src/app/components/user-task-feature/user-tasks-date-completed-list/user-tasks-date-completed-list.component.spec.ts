import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserTasksDateCompletedListComponent } from './user-tasks-date-completed-list.component';

describe('UserTasksDateCompletedListComponent', () => {
  let component: UserTasksDateCompletedListComponent;
  let fixture: ComponentFixture<UserTasksDateCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksDateCompletedListComponent ], 
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTasksDateCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
