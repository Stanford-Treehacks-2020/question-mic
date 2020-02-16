import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecCoursesComponent } from './lec-courses.component';

describe('LecCoursesComponent', () => {
  let component: LecCoursesComponent;
  let fixture: ComponentFixture<LecCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
