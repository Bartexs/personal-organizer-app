import { TestBed } from '@angular/core/testing';

import { NotificationsUtilityService } from './notifications-utility.service';

describe('NotificationsUtilityService', () => {
  let service: NotificationsUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
