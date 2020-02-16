import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecEmailComponent } from './lec-email.component';

describe('LecEmailComponent', () => {
  let component: LecEmailComponent;
  let fixture: ComponentFixture<LecEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
