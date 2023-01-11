import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/auth/auth.service';
import { AppearanceService } from '../../settings/appearance.service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { AppUser } from 'src/app/models/AppUser.model';
import { ColorSchema } from 'src/app/models/ColorSchema.model';

class MockAuthService {
  logoutAppUser() {};

  getAppUser(): Observable<AppUser | null> {
    let appUserSource = new BehaviorSubject<AppUser | null>(null);
    return appUserSource.asObservable();
  };
}

class MockAppearanceService {
  getColorSchemaObservable() {
    let colorSchema = new ReplaySubject<ColorSchema>();
    return colorSchema.asObservable();
  }
}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [NavBarComponent, 
        {provide: AuthService, useClass: MockAuthService}, 
        {provide: AppearanceService, useClass: MockAppearanceService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
