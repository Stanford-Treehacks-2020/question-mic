import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import {EmailComponent} from './student/email/email.component';
import {AuthComponent} from './student/auth/auth.component';
import {CoursesComponent} from './student/courses/courses.component';
import {CourseComponent} from './student/courses/course/course.component';
import {LecturerComponent} from './lecturer/lecturer.component';
import {LecEmailComponent} from './lecturer/lec-email/lec-email.component';
import {LecAuthComponent} from './lecturer/lec-auth/lec-auth.component';
import {LecCoursesComponent} from './lecturer/lec-courses/lec-courses.component';
import {LecCourseComponent} from './lecturer/lec-course/lec-course.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'student', component: StudentComponent,
    children: [
      {path: '', component: EmailComponent},
      {path: 'auth', component: AuthComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'courses/:id', component: CourseComponent},
    ]
  },
  {
    path: 'lecturer', component: LecturerComponent,
    children: [
      {path: '', component: LecEmailComponent},
      {path: 'auth', component: LecAuthComponent},
      {path: 'courses', component: LecCoursesComponent},
      {path: 'courses/:id', component: LecCourseComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
