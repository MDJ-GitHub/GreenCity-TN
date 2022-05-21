import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrApprovedComponent } from './a-fr-approved.component';

describe('AFrApprovedComponent', () => {
  let component: AFrApprovedComponent;
  let fixture: ComponentFixture<AFrApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
