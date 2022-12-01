import { TestBed } from '@angular/core/testing';

import { StatisticsMainService } from './statistics-main.service';

describe('StatisticsMainService', () => {
  let service: StatisticsMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
