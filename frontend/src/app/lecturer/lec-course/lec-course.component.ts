import {Component, OnInit} from '@angular/core';

declare var WSAudioAPI: any;

@Component({
  selector: 'app-lec-course',
  templateUrl: './lec-course.component.html',
  styleUrls: ['./lec-course.component.scss']
})
export class LecCourseComponent implements OnInit {

  player: any;

  state : any = {
    showQuestions:false,
  };

  started: boolean = false;

  constructor() {
    this.player = new WSAudioAPI.Player();
    // console.log(this.player);
  }

  showQuestions() {
  this.state.showQuestions = true;
  }

  play() {
    this.player.start();
    this.started = true;
  }

  stop() {
    this.player.stop();
    this.started = false;
  }

  ngOnInit() {
  }

}
