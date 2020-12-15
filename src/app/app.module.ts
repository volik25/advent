import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';
import { AuthentificateComponent } from './authentificate/authentificate.component';
import { MainComponent } from './main/main.component';
import { JsonpInterceptingModule } from './jsonp-interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    JsonpInterceptingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }