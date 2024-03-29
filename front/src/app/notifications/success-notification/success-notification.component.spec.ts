import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessNotificationComponent } from './success-notification.component';

describe('SuccessNotificationComponent', () => {
  let component: SuccessNotificationComponent;
  let fixture: ComponentFixture<SuccessNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessNotificationComponent ]
    })
    .compileComponents();

    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessNotificationComponent);
    component = fixture.componentInstance;
    let message: {messageContent: string, objectType: string};

    message = {
      messageContent: "some message",
      objectType: "userTask"
    }

    component.message = message;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
