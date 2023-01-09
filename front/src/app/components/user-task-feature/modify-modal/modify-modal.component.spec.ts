import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTask } from 'src/app/models/UserTask.model';
import { ModifyModalComponent } from './modify-modal.component';

describe('ModifyModalComponent', () => {
  let component: ModifyModalComponent;
  let fixture: ComponentFixture<ModifyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyModalComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyModalComponent);
    component = fixture.componentInstance;

    const testTask: UserTask = {
      name: "testtask",
      completed: false,
      scheduleDate: "2022-01-22",
      importantTask: false
    };
    component.modifyUserTask = testTask;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
