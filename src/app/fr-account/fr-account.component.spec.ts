import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrAccountComponent } from './fr-account.component';

describe('FrAccountComponent', () => {
  let component: FrAccountComponent;
  let fixture: ComponentFixture<FrAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
