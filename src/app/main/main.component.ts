import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Answer, answers } from '../models/answer.model';
import { ApiService } from '../services/api.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public baseAuth = environment.baseAuth;
  public mainUrl = environment.mainUrl;
  public userName!: string;
  public crop!: any;
  public photoCrop!: any;
  public photoSrc!: string;
  public days: Answer[] = answers;
  public userData: any = null;
  private day!: number;
  constructor(private vkApi: vkApiService, private api: ApiService, private router: Router) {
    let response = window.location.href.split('#')[1];
    if (response) {
      this.userData = this.getParams(response);
      sessionStorage.setItem('token', this.userData.access_token);
      this.vkApi.getUser().subscribe(res => {
        if (res.response) {
          this.api.getUserData(res.response[0].id).subscribe(userData => {
            if (userData) {
              if (!userData.faculty || !userData.course) {
                router.navigate(['/auth']);
              }
              else {
                window.history.back();
              }
            }
            else {
              router.navigate(['/auth']);
            }
          })
        }
        if (res.error) {
          console.log(res.error);
        }
      })
    }
    else {
      this.checkAdvent();
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
    console.log();
  }

  private checkAdvent() {
    this.api.getDate().subscribe((date: string) => {
      this.day = parseInt(date.substring(0, 2));
      let mY = date.substring(3).split('/')
      if (parseInt(mY[0]) === 12 && parseInt(mY[1]) === 2020) {
        if (this.day > 27 || this.day < 21) {
          this.router.navigate(['/finished']);
        }
        this.days.forEach(dayOfDays => {
          if (dayOfDays.id > this.day) {
            dayOfDays.blocked = true
          }
        })
      }
      else {
        this.router.navigate(['/finished']);
      }
    })
  }

  public toAnswer(id: number) {
    if (id <= this.day) {
      this.vkApi.getUser().subscribe(res => {
        if (res.response) {
          this.router.navigate(['/answer', id]);
        }
        if (res.error) {
          window.location.href = this.baseAuth;
        }
      })
    }
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