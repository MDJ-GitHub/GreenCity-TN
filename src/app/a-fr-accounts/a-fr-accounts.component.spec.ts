import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrAccountsComponent } from './a-fr-accounts.component';

describe('AFrAccountsComponent', () => {
  let component: AFrAccountsComponent;
  let fixture: ComponentFixture<AFrAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
