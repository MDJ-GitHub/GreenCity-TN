import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInfoComponent } from './fr-info.component';

describe('FrInfoComponent', () => {
  let component: FrInfoComponent;
  let fixture: ComponentFixture<FrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
