import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrProfileComponent } from './fr-profile.component';

describe('FrProfileComponent', () => {
  let component: FrProfileComponent;
  let fixture: ComponentFixture<FrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
