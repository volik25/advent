import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { MainComponent, SubscribeModalComponent } from './main/main.component';
import { JsonpInterceptingModule } from './jsonpModule/jsonp-interceptor.module';
import { DayService } from './services/days.service';
import { AnswerComponent } from './answer/answer.component';
import { FinishedComponent } from './finished/finished.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from './apiModule/api.module';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminSecurity } from './security/admin.security';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificateComponent,
    MainComponent,
    AnswerComponent,
    FinishedComponent,
    AdminComponent,
    SignInComponent,
    SubscribeModalComponent
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
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }