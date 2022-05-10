import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrContactComponent } from './fr-contact.component';

describe('FrContactComponent', () => {
  let component: FrContactComponent;
  let fixture: ComponentFixture<FrContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
