import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserTasksAllScheduledListComponent } from './user-tasks-all-scheduled-list.component';

describe('UserTasksAllScheduledListComponent', () => {
  let component: UserTasksAllScheduledListComponent;
  let fixture: ComponentFixture<UserTasksAllScheduledListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksAllScheduledListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTasksAllScheduledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
