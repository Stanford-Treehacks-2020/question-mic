import {Component, OnDestroy, OnInit} from '@angular/core';

declare var WSAudioAPI: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {

  streamer: any;
  state: any = {
    step: 'initial',
    started: false
  };

  constructor() {
    this.streamer = new WSAudioAPI.Streamer();
  }

  start() {
    this.streamer.start();
    console.log("start recording");
    this.state.started = true;
  }

  stop() {
    this.streamer.stop();
    console.log("stop recording");
    this.state.started = false;
  }

  toggle() {
    if (this.state.started) {
      this.stop();
    } else {
      this.start();
    }
  }

  raiseHand() {
    this.state.step = 'raised';
    setTimeout(() => {
      this.ask();
    }, 7300);
  }

  ask() {
    this.state.step = 'ask';
    this.start();
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.stop();
  }

}
