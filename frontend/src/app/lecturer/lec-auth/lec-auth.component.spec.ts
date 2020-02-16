import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecAuthComponent } from './lec-auth.component';

describe('LecAuthComponent', () => {
  let component: LecAuthComponent;
  let fixture: ComponentFixture<LecAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
