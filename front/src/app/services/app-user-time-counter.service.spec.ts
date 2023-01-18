import { TestBed } from '@angular/core/testing';

import { AppUserTimeCounterService } from './app-user-time-counter.service';

describe('AppUserTimeCounterService', () => {
  let service: AppUserTimeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUserTimeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
