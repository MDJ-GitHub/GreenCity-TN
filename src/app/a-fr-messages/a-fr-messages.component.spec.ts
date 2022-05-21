import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrMessagesComponent } from './a-fr-messages.component';

describe('AFrMessagesComponent', () => {
  let component: AFrMessagesComponent;
  let fixture: ComponentFixture<AFrMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
