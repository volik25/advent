import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Answer, answers, BaseAnswer } from '../models/answer.model';
import { ApiService } from '../services/api.service';
import { DayService } from '../services/days.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public baseAuth = environment.baseAuth;
  public mainUrl = environment.mainUrl;
  public userName!: string;
  public crop!: any;
  public photoCrop!: any;
  public photoSrc!: string;
  public days!: Answer[];
  public userData: any = null;
  constructor(private vkApi: vkApiService, private api: ApiService, private dS: DayService, private router: Router) {
    let response = window.location.href.split('#')[1];
    if (response) {
      this.userData = this.getParams(response);
      sessionStorage.setItem('token', this.userData.access_token);
      router.navigate(['/auth']);
    }
    else {
      this.api.getDate().subscribe((date: string) => {
        let day = parseInt(date.substring(0, 2));
        let mY = date.substring(3).split('/')
        if (parseInt(mY[0]) === 12 && parseInt(mY[1]) === 2020) {
          if (day > 27 || day < 21) {
            router.navigate(['/finished']);
          }
          this.days = answers.filter(x => x.id <= day);
        }
        else {
          router.navigate(['/finished']);
        }
      })
    }
  }

  ngOnInit(): void {
    this.vkApi.getPhoto().subscribe((res: any) => {
      if (res.response) {
        this.userName = res.response[0].first_name;
        this.photoSrc = res.response[0].crop_photo.photo.sizes[5].url;
        this.crop = res.response[0].crop_photo.crop;
        this.photoCrop = {
          "margin-top": `-${this.crop.y}%`,
          "margin-left": `-${this.crop.x}%`,
        }
      }
      if (res.error) {
        console.log(res.error);
      }
    })
  }

  public toAnswer(id: number) {
    this.router.navigate(['/answer', id]);
  }

  public auth() {
    this.vkApi.getUser().subscribe(res => {
      if (res.response) {
        this.router.navigate(['/auth'])
      }
      if (res.error) {
        window.location.href = this.baseAuth;
      }
    })
  }

  public getParams(response: string) {
    let paramString = response.split('&');
    let params: { [key: string]: any } = {};
    paramString.forEach(param => {
      let paramObject = param.split('=');
      params[paramObject[0]] = paramObject[1];
    })
    return params;
  }
}