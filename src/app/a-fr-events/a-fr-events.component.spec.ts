import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrEventsComponent } from './a-fr-events.component';

describe('AFrEventsComponent', () => {
  let component: AFrEventsComponent;
  let fixture: ComponentFixture<AFrEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
