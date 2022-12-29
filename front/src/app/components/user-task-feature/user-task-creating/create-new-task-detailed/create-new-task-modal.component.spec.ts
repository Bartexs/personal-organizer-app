import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskComponent } from './create-new-task-modal.component';

describe('CreateNewTaskComponent', () => {
  let component: CreateNewTaskComponent;
  let fixture: ComponentFixture<CreateNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});