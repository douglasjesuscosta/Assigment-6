import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeleteCoursesComponent } from './updatedelete-courses.component';

describe('UpdatedeleteCoursesComponent', () => {
  let component: UpdatedeleteCoursesComponent;
  let fixture: ComponentFixture<UpdatedeleteCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedeleteCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedeleteCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
