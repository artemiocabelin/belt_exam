import { NewAnswerComponent } from './new-answer/new-answer.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'index', pathMatch: 'full', component: IndexComponent },
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'new_question', pathMatch: 'full', component: NewQuestionComponent },
  { path: 'question/:id', pathMatch: 'full', component: QuestionAnswerComponent },
  { path: 'question/:id/new_answer', pathMatch: 'full', component: NewAnswerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
