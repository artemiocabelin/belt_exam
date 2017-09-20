import { Answer } from './../answer';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  subscription: Subscription;
  question;
  newAnswer: Answer;
  constructor(private _publicService: PublicService, private _route: ActivatedRoute, private _router: Router) {
    this.newAnswer = new Answer();
   }

  ngOnInit() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        console.log('got params id: ' + params.get('id'));
        return this._publicService.retrieveQuestionById(params.get('id'));
    }).subscribe(question => {
      this.question = question;
      console.log(this.question);
    });
  }

  submitAnswer(question_id) {
    this.newAnswer._question = question_id;
    console.log(this.newAnswer);
    this._publicService.addAnswerToQuestionById(this.newAnswer)
      .then(data => {
        console.log('controller addAnswerToQuestioById then');
        console.log(data);
        this.newAnswer = new Answer();
        this._router.navigate(['']);
      })
      .catch(error => {
        console.log('controller addAnswerToQuestioById error');
        console.log(error);
      });
  }

}
