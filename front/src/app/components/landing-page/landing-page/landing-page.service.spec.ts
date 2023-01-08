import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LandingPageService } from './landing-page.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingPageService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
