import { TestBed } from '@angular/core/testing';

import { CreateUserTaskService } from './create-user-task.service';

describe('CreateUserTaskService', () => {
  let service: CreateUserTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
