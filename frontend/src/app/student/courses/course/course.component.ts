import {Component, OnInit} from '@angular/core';

declare var WSAudioAPI: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  streamer: any;

  started : boolean = false;

  constructor() {
    this.streamer = new WSAudioAPI.Streamer();
  }

  start() {
    this.streamer.start();
    this.started = true;
  }
  stop() {
    this.streamer.stop();
    this.started = false;
  }


  ngOnInit() {
  }

}
