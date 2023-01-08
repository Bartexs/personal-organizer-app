import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserTasksListService} from './user-tasks-list.service';

describe('UserTasksListServiceService', () => {
  let service: UserTasksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(UserTasksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
