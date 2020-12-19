import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { MainComponent } from './main/main.component';
import { JsonpInterceptingModule } from './jsonpModule/jsonp-interceptor.module';
import { DayService } from './services/days.service';
import { AnswerComponent } from './answer/answer.component';
import { FinishedComponent } from './finished/finished.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificateComponent,
    MainComponent,
    AnswerComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    JsonpInterceptingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    DayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }