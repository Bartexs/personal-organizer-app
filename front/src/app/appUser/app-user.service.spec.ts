import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppUserService } from './app-user.service';

describe('AppUserService', () => {
  let service: AppUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(AppUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
