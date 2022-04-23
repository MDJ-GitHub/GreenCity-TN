import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrLoginComponent } from './fr-login.component';

describe('FrLoginComponent', () => {
  let component: FrLoginComponent;
  let fixture: ComponentFixture<FrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
