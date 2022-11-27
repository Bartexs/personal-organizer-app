import { TestBed } from '@angular/core/testing';

import { UserTasksListService} from './user-tasks-list.service';

describe('UserTasksListServiceService', () => {
  let service: UserTasksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTasksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
