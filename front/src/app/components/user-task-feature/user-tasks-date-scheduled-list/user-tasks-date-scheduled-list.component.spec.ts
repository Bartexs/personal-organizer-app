import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserTasksDateScheduledListComponent } from './user-tasks-date-scheduled-list.component';

describe('UserTasksDateScheduledListComponent', () => {
  let component: UserTasksDateScheduledListComponent;
  let fixture: ComponentFixture<UserTasksDateScheduledListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksDateScheduledListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
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
