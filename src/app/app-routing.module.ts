import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { FinishedComponent } from './finished/finished.component';
import { MainComponent } from './main/main.component';
import { AdminSecurity } from './security/admin.security';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auth', component: AuthentificateComponent },
  { path: 'answer/:id', component: AnswerComponent},
  { path: 'finished', component: FinishedComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminSecurity]},
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
