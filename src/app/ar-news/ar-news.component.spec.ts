import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArNewsComponent } from './ar-news.component';

describe('ArNewsComponent', () => {
  let component: ArNewsComponent;
  let fixture: ComponentFixture<ArNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
