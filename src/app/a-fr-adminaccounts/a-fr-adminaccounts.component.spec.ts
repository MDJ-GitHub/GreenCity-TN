import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrAdminaccountsComponent } from './a-fr-adminaccounts.component';

describe('AFrAdminaccountsComponent', () => {
  let component: AFrAdminaccountsComponent;
  let fixture: ComponentFixture<AFrAdminaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrAdminaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrAdminaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
