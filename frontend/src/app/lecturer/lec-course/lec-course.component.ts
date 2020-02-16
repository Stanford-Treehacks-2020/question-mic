import {Component, OnInit} from '@angular/core';

declare var WSAudioAPI: any;

@Component({
  selector: 'app-lec-course',
  templateUrl: './lec-course.component.html',
  styleUrls: ['./lec-course.component.scss']
})
export class LecCourseComponent implements OnInit {

  questions = [
    {question: "Question 1", active: false},
    {question: "Question 2", active: false},
    {question: "Question 3", active: false},
  ];

  player: any;

  state: any = {
    showQuestions: false,
  };

  started: boolean = false;

  constructor() {
    this.player = new WSAudioAPI.Player();
    // console.log(this.player);
  }

  showQuestions() {
    this.state.showQuestions = true;
  }

  checkIfActive(): boolean {
    let i = this.questions.length;
    let active = false;
    while (i--) {
      if (this.questions[i].active) {
        this.questions[i].active = false;
        active = true;
      }
    }
    return active;
  }

  toggle(index: number) {
    if (this.checkIfActive()) {
      this.stop();
    }
    if (this.questions[index].active) {
      this.stop();
    } else {
      this.play();
    }
    this.questions[index].active = !this.questions[index].active;
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
