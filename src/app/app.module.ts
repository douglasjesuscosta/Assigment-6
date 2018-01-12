import { CourseService } from './services/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CategoryService } from './category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ListcoursesComponent } from './listcourses/listcourses.component';
import { UpdatedeleteCoursesComponent } from './updatedelete-courses/updatedelete-courses.component';
import { AppErrorHandler } from '../app/common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavbarComponent,
    SignupComponent,
    ListcoursesComponent,
    UpdatedeleteCoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: UpdatedeleteCoursesComponent},
      {path: 'insert', component: CourseComponent},
      {path:'listCourses', component: ListcoursesComponent}
    ])

  ],
  providers: [ CourseService,
               CategoryService,
               {provide: ErrorHandler, useClass: AppErrorHandler}           
  ],
  bootstrap: [AppComponent],

  exports: [RouterModule]
})
export class AppModule { }
