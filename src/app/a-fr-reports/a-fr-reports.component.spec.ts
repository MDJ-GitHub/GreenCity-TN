import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrReportsComponent } from './a-fr-reports.component';

describe('AFrReportsComponent', () => {
  let component: AFrReportsComponent;
  let fixture: ComponentFixture<AFrReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
