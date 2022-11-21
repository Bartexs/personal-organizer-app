import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfModalComponent } from './delete-conf-modal.component';

describe('DeleteConfModalComponent', () => {
  let component: DeleteConfModalComponent;
  let fixture: ComponentFixture<DeleteConfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
