import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { StudentComponent } from './student/student.component';
import { EmailComponent } from './student/email/email.component';
import { AuthComponent } from './student/auth/auth.component';
import { CoursesComponent } from './student/courses/courses.component';
import { CourseComponent } from './student/courses/course/course.component';
import { LecEmailComponent } from './lecturer/lec-email/lec-email.component';
import { LecAuthComponent } from './lecturer/lec-auth/lec-auth.component';
import { LecCoursesComponent } from './lecturer/lec-courses/lec-courses.component';
import { LecCourseComponent } from './lecturer/lec-course/lec-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LecturerComponent,
    StudentComponent,
    EmailComponent,
    AuthComponent,
    CoursesComponent,
    CourseComponent,
    LecEmailComponent,
    LecAuthComponent,
    LecCoursesComponent,
    LecCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
