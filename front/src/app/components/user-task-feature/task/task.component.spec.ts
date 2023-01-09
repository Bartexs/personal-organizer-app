import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskComponent } from './task.component';
import { UserTask } from 'src/app/models/UserTask.model';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    const testTask: UserTask = {
      name: "testtask",
      completed: false,
      scheduleDate: "2022-01-22",
      importantTask: false
    };

    component.taskToShow = testTask;

    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
