import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.less']
})
export class AuthentificateComponent implements OnInit {
  public baseAuth = environment.baseAuth;
  public mainUrl = environment.mainUrl;
  public user: any = null;
  constructor(private api: ApiService) {
    let response = window.location.href.split('#')[1]
    if (response) {
      this.user = this.getParams(response);
      sessionStorage.setItem('token', this.user.access_token);
      window.location.href = "http://localhost:4200";
    }
  }

  ngOnInit(): void {

  }

  public oAuthVK() {
    window.location.href = this.mainUrl;
  }

  public getParams(response: string) {
    let paramString = response.split('&');
    let params: {[key: string]: any} = {};
    paramString.forEach(param => {
      let paramObject = param.split('=');
      params[paramObject[0]] = paramObject[1];
    })
    return params;
  }
}
