import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { AppearanceService } from '../../settings/appearance.service';

import { UserTaskHeaderComponent } from './user-task-header.component';

class MockUserTasksListService {
  getMessageToShow() {
    let messageToShow = new ReplaySubject<"asdas">();
    return messageToShow.asObservable();
  }

  getMessage() {
    let dateSource = new ReplaySubject<"asdasdsa">();
    return dateSource.asObservable();
  }

  setMessageToShow() {}

  setMessage() {}

  fetchTasksEmit() {}

  setShowAllSchedulesUserTasksObservable() {}
}

class MockAppearanceService {
  getColorSchemaObservable() {
    let colorSchema = new ReplaySubject<ColorSchema>();
    return colorSchema.asObservable();
  }

  setColorSchemaObservable() {
  }
}

describe('UserTaskHeaderComponent', () => {
  let component: UserTaskHeaderComponent;
  let fixture: ComponentFixture<UserTaskHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTaskHeaderComponent ],
      providers: [UserTaskHeaderComponent, 
        {provide: UserTasksListService, useClass: MockUserTasksListService}, 
        {provide: AppearanceService, useClass: MockAppearanceService}]
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
