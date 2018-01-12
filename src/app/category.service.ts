import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from "./Category";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  private baseUrl = "http://localhost:8080/api/category";

  constructor(
    private http: HttpClient
  ) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  save(category: Category) {
    return this.http.post(this.baseUrl, category);
  }

}