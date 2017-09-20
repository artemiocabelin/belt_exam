import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
@Injectable()
export class PublicService {

  constructor(private _http: Http) { }

  getAllQuestions() {
    return this._http.get('/api/questions')
      .map(response => response.json())
      .toPromise();
  }

  saveNameToSession(usernameData) {
    return this._http.post('/api/questions/user', usernameData)
      .map(response => response.json())
      .toPromise();
  }

  getCurrentUser() {
    return this._http.get('/api/questions/user/get')
      .map(response => response.json())
      .toPromise();
  }
  checkIfUserInSession() {
    console.log('service getting if user in session');
    return this._http.get('api/questions/checksession')
      .map(response => response.json())
      .toPromise();
  }

  logoutUser() {
    console.log('service loggin user out');
    return this._http.get('/api/questions/logout')
      .map(response => response.json())
      .toPromise();
  }
  saveQuestion(questionData) {
    console.log('service saving question');
    console.log(questionData);
    return this._http.post('/api/questions/add', questionData)
      .map(response => response.json())
      .toPromise();
  }

  retrieveQuestionById(questionId) {
    console.log('service retrieving question by id');
    return this._http.get('/api/questions/' + questionId)
      .map(response => response.json())
      .toPromise();
  }

  addAnswerToQuestionById(questionIdData) {
    console.log('service retrieving question by id');
    return this._http.post('/api/questions/answer', questionIdData)
      .map(response => response.json())
      .toPromise();
  }

  incrementLike(answerIdData) {
    console.log('service retrieving question by id');
    return this._http.post('/api/questions/like', answerIdData)
      .map(response => response.json())
      .toPromise();
  }



}
