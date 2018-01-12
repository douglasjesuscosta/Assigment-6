import { CategoryService } from './../category.service';
import { Category } from './../Category';
import { Course } from './../Course';
import { CourseService } from '../services/course.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  categories: Category[];
  @Input('course')course: Course;

  constructor(private categoryService: CategoryService, 
              private courseService: CourseService) {
  }
  ngOnInit() {
    
    this.getCategories();
    this.course = new Course();
    this.course.category = new Category();

  }

  onSubmit(): void {
    console.log(this.course.name);
    console.log(this.course.moneyBack);
    console.log(this.course.category.id);

    if(this.course.id == null){
      this.courseService.save(this.course).subscribe(
        course =>this.course);
    }else{
      this.courseService.update(this.course).subscribe(
        course => this.course);
    }
    
  }
  
  getCategories() {
    this.categoryService.getCategories()
    .subscribe(
      categories => this.categories = categories);
  }

}
