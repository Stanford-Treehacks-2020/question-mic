import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lec-courses',
  templateUrl: './lec-courses.component.html',
  styleUrls: ['./lec-courses.component.scss']
})
export class LecCoursesComponent implements OnInit {

  courses = [
    {
      id: 'CS188',
      name: 'Machine Learning'
    },
    {
      id: 'CS70',
      name: 'Discrete Mathematics'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
