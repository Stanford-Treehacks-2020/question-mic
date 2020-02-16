import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecCourseComponent } from './lec-course.component';

describe('LecCourseComponent', () => {
  let component: LecCourseComponent;
  let fixture: ComponentFixture<LecCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
