import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { MainComponent } from './main/main.component';
import { JsonpInterceptingModule } from './jsonpModule/jsonp-interceptor.module';
import { AnswerComponent } from './answer/answer.component';
import { FinishedComponent } from './finished/finished.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from './apiModule/api.module';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminSecurity } from './security/admin.security';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificateComponent,
    MainComponent,
    AnswerComponent,
    FinishedComponent,
    AdminComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    JsonpInterceptingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AdminSecurity,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }