import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrHomeComponent } from './a-fr-home.component';

describe('AFrHomeComponent', () => {
  let component: AFrHomeComponent;
  let fixture: ComponentFixture<AFrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
