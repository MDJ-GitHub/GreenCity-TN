import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrInfoComponent } from './a-fr-info.component';

describe('AFrInfoComponent', () => {
  let component: AFrInfoComponent;
  let fixture: ComponentFixture<AFrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
