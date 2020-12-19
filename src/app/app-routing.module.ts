import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { FinishedComponent } from './finished/finished.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auth', component: AuthentificateComponent },
  { path: 'answer/:id', component: AnswerComponent},
  { path: 'finished', component: FinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
