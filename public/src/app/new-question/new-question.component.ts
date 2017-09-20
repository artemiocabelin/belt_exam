import { Router } from '@angular/router';
import { Question } from './../question';
import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: Question = new Question();
  constructor(private _publicService: PublicService, private _router: Router) { }

  ngOnInit() {
  }

  saveQuestion() {
    console.log('controller saving question');
    this._publicService.saveQuestion(this.newQuestion)
      .then(data => {
        console.log('controller saveQuestion then');
        console.log(data);
        this.newQuestion = new Question();
        this._router.navigate(['']);
      })
      .catch(error => {
        console.log('controller saveQuestion error');
        console.log(error);
      });
  }

}
