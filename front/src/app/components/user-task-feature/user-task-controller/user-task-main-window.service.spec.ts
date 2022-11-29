import { TestBed } from '@angular/core/testing';

import { UserTaskMainWindowService } from './user-task-main-window.service';

describe('UserTaskMainWindowService', () => {
  let service: UserTaskMainWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTaskMainWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
