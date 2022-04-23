import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrReportComponent } from './fr-report.component';

describe('FrReportComponent', () => {
  let component: FrReportComponent;
  let fixture: ComponentFixture<FrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
