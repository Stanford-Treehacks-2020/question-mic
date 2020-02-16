import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lec-email',
  templateUrl: './lec-email.component.html',
  styleUrls: ['./lec-email.component.scss']
})
export class LecEmailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['/lecturer/auth'])
  }

}
