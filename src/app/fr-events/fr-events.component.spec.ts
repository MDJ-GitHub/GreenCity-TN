import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrEventsComponent } from './fr-events.component';

describe('FrEventsComponent', () => {
  let component: FrEventsComponent;
  let fixture: ComponentFixture<FrEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
