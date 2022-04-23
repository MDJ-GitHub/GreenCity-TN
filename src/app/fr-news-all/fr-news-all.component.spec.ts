import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrNewsAllComponent } from './fr-news-all.component';

describe('FrNewsAllComponent', () => {
  let component: FrNewsAllComponent;
  let fixture: ComponentFixture<FrNewsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrNewsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrNewsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
