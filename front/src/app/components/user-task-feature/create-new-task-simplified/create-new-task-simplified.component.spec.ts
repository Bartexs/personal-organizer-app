import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskSimplifiedComponent } from './create-new-task-simplified.component';

describe('CreateNewTaskSimplifiedComponent', () => {
  let component: CreateNewTaskSimplifiedComponent;
  let fixture: ComponentFixture<CreateNewTaskSimplifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewTaskSimplifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewTaskSimplifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
