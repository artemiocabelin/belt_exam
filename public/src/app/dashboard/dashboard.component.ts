import { Question } from './../question';
import { Router } from '@angular/router';
import { PublicService } from './../public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser;
  questions = [];
  showQuestions: Question[] = [];
  searchVal = '';
  hasNotUsedSearch = true;
  constructor(private _publicService: PublicService, private _router: Router) {
    this.checkUserInSession();
    this.getCurrentUser();
    this.getAllQuestions();
    this.showQuestions = this.questions;
   }

  ngOnInit() {
  }

  getCurrentUser() {
    this._publicService.getCurrentUser()
      .then(data => {
        console.log('controller getCurrentUser then');
        console.log(data);
        this.currentUser = data;
      })
      .catch(error => {
        console.log('controller getCurrentUser error');
      });
  }

  checkUserInSession() {
    this._publicService.checkIfUserInSession()
      .then((data) => {
        console.log('got then response');
        console.log(data);
        if (!data) {
          this._router.navigate(['index']);
        }
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
      });
  }

  getAllQuestions() {
    this._publicService.getAllQuestions()
      .then((data) => {
        console.log('got then response');
        console.log(data);
        this.questions = data;
      })
      .catch((error) => {
        console.log('got catch response');
        console.log(error);
      });
  }

  searchQuestions() {
    this.hasNotUsedSearch = false;
    console.log('this is happening');
    console.log(this.searchVal);
    this.showQuestions = this.questions.filter((index) => {
      return index.question.toLowerCase().includes(this.searchVal.toLowerCase());
    });
  }

}
