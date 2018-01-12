import { NotfoudError } from './../common/notfoud-error';
import { AppError } from './../common/app-error';
import { Course } from './../Course';
import { CategoryService } from './../category.service';
import { CourseService } from '../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'updatedelete-courses',
  templateUrl: './updatedelete-courses.component.html',
  styleUrls: ['./updatedelete-courses.component.css']
})
export class UpdatedeleteCoursesComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService,
  private categoryService: CategoryService) { 
    
  }

  ngOnInit() {
    this.getCourses();
  }

  update(course: Course){
    this.courseService.update(course)
    .subscribe(
      response => {
        let index = this.courses.indexOf(course);
        this.courses[index] = course;
      },
      (error: AppError) => {
        if(error instanceof NotfoudError){
          alert('The altered instance may be excluded because it was not foud');
        }else{
          throw error;
        }
      }
    );
  }

  delete(course: Course){
    this.courseService.delete(course).subscribe(
      response => {
        this.courses = this.courses.filter(c => c !== course);
      },
      (error: AppError) => {

        if(error instanceof NotfoudError){
          alert('This course may already be deleted by someone else');
        }else{
          throw error;
        }
        
      }
    );
  }

  getCourses(){
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }
}
