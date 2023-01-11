import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsListService } from './notifications-list.service';
import { NotificationsComponent } from './notifications-list.component';
import { OrganizerNotification } from 'src/app/models/OrganizerNotification.model';
import { Subject } from 'rxjs';

class MockNotificationsListService {
  getNotification() {
    let newNotification = new Subject<OrganizerNotification>();
    return newNotification.asObservable();
  };

  getNotificationToDelete() {
    let notificationToDelete = new Subject<OrganizerNotification>();
    return notificationToDelete.asObservable();
  };
}

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsComponent ],
      providers: [NotificationsComponent, 
        {provide: NotificationsListService, useClass: MockNotificationsListService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
