import { NotfoudError } from './../common/notfoud-error';
import { AppError } from './../common/app-error';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from './../Category';
import { Course } from './../Course';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'listcourses',
  templateUrl: './listcourses.component.html',
  styleUrls: ['./listcourses.component.css']
})
export class ListcoursesComponent implements OnInit {
  @Input('courses') courses: Course[];

  constructor(private courseService: CourseService) { 
  }

  ngOnInit() {
    this.getCourses();
  }

  update(course: Course){
    this.courseService.update(course)
      .subscribe(
        response => course
      );
  }

  delete(course: Course){
    this.courses = this.courses.filter(c => c !== course);
    this.courseService.delete(course).subscribe(
      response => course,
      (error: AppError) => {
        if(error instanceof NotfoudError){
          alert('Instance not found, probably is already deleted by someone else');
        }else{
          throw error;
        }
      }
    );
  }

  getCourses(){
    this.courseService.getCourses()
      .subscribe(
          courses => this.courses = courses
      );
  }

}
