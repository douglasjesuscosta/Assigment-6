import { NotfoudError } from '../common/notfoud-error';
import { AppError } from '../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from "../Course";
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from 'selenium-webdriver/http';
import { catchError, map, tap } from 'rxjs/operators';
import  'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
  private baseUrl = "http://localhost:8080/course";

  constructor(
    private http: HttpClient
  ) { }

  getCourses (): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + "/list")
    .catch(this.handleError);
  }

  save(course: Course) {
    return this.http.post(this.baseUrl + "/insert", course)
    .catch(this.handleError);
    
  }

  update(course: Course) {
    return this.http.put(this.baseUrl + "/update/" + course.id, course)
    .catch(this.handleError);
  }

  delete(course: Course){
    
    return  this.http.delete<Course>(this.baseUrl + "/delete/" + course.id)
    .catch(this.handleError)
  }

  private handleError(error: Response){
    if(error.status === 404){
      return Observable.throw(new NotfoudError());
    }
    return  Observable.throw(new AppError(error));
  }

}
