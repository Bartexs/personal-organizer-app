import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarService } from './nav-bar.service';

describe('NavBarService', () => {
  let service: NavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(NavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
