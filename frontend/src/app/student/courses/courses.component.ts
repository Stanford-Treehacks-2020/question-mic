import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: 'CS188',
      name: 'Machine Learning'
    },
    {
      id: 'ANTHRO2AC',
      name: 'Archaeology'
    } ,
    {
      id: 'CS70',
      name: 'Discrete Mathematics'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
