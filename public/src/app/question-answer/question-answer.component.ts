import { Question } from './../question';
import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  subscription: Subscription;
  question: Question = new Question;
  sortedAnswers: object[] = [];
  constructor(private _publicService: PublicService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeQA();
  }

  addLike(answer_id) {
    console.log('adding like');
    let a_id = {
      aid: answer_id
    };
    this._publicService.incrementLike(a_id)
      .then(data => {
        console.log('controller addLike then');
        console.log(data);
        this.subscribeQA();
      })
      .catch(error => {
        console.log('controller addLike error');
        console.log(error);
      });
  }

  subscribeQA() {
    this.subscription = this._route.paramMap
      .switchMap(params => {
        console.log('got params id: ' + params.get('id'));
        return this._publicService.retrieveQuestionById(params.get('id'));
    }).subscribe(question => {
      this.question = question;
      console.log(this.question);
      if (this.question.answers.length > 0) {
        this.sortedAnswers = question.answers.sort((a, b) => {
          return b.likes - a.likes;
        });
      }
    });
  }

}
