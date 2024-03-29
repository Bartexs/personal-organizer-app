import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateUserTaskService } from './create-user-task.service';

describe('CreateUserTaskService', () => {
  let service: CreateUserTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(CreateUserTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
