import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrConfComponent } from './fr-conf.component';

describe('FrConfComponent', () => {
  let component: FrConfComponent;
  let fixture: ComponentFixture<FrConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
