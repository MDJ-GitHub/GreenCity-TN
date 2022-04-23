import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrNewsComponent } from './fr-news.component';

describe('FrNewsComponent', () => {
  let component: FrNewsComponent;
  let fixture: ComponentFixture<FrNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
