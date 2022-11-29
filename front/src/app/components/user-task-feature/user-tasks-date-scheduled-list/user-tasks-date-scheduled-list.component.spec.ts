import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTasksDateScheduledListComponent } from './user-tasks-date-scheduled-list.component';

describe('UserTasksDateScheduledListComponent', () => {
  let component: UserTasksDateScheduledListComponent;
  let fixture: ComponentFixture<UserTasksDateScheduledListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksDateScheduledListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTasksDateScheduledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
