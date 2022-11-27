import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskHeaderComponent } from './user-task-header.component';

describe('UserTaskHeaderComponent', () => {
  let component: UserTaskHeaderComponent;
  let fixture: ComponentFixture<UserTaskHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTaskHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTaskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
