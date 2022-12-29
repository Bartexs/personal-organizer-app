import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSubtaskListComponent } from './create-new-subtask-list.component';

describe('CreateNewSubtaskListComponent', () => {
  let component: CreateNewSubtaskListComponent;
  let fixture: ComponentFixture<CreateNewSubtaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSubtaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewSubtaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
