import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  private lastDate!: number;
  public users!: User[];
  public headers: string[] = ['VK id', 'ФИ', 'Страница', 'Факультет', 'Курс'];
  constructor(private api: ApiService, private vkApi: vkApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAnswers().subscribe(res => {
      this.checkDate();
      this.users = res;
      let ids = '';
      res.forEach((users: { user_id: any; }) => {
        ids += `${users.user_id},`;
      });
      ids = ids.substring(0, ids.length - 1);
      this.vkApi.getLink(ids).subscribe(({ response }) => {
        response.forEach((userDomain: { id: any; domain: any; }) => {
          this.users.forEach(user => {
            if (userDomain.id == user.user_id) {
              user['domain'] = userDomain.domain;
            };
          });
        });
        console.log(this.users);
        
        this.users.forEach(user => {
          if (user.answers.length) {
            let dates = [
              21, 22, 23, 24, 25, 26, 27
            ]
            for (let i = 0; i < dates.length; i++) {
              const date = dates[i];
              let x = user.answers.find(x => parseInt(x.answer_id) == date);
              if (!x) {
                user.answers.push({
                  answer_id: date.toString(),
                  answer: 'Не отвечено',
                  danger: true
                })
              }
            }
          }
          else {
            for (let i = 21; i < 28; i++) {
              user.answers.push({
                answer_id: i.toString(),
                answer: 'Не отвечено',
                danger: true
              })
            }
          }
          let sortedAnswers = user.answers.sort((a1, a2) => parseInt(a1.answer_id) - parseInt(a2.answer_id));
          user.answers = sortedAnswers;
        });
      })
    })
  }

  private checkDate() {
    this.api.getDate().subscribe((date: string) => {
      let day = parseInt(date.substring(0, 2));
      let mY = date.substring(3).split('/')
      if (parseInt(mY[0]) === 12 && parseInt(mY[1]) === 2020) {
        for (let i = 21; i <= 27; i++) {
          if (i <= day) {
            this.headers.push(`Вопрос от ${i}.12`);
            this.lastDate = i
          }
        }
      }
    })
  }

  public toMainOrLogOut(toMain: boolean) {
    if (!toMain) {
      sessionStorage.removeItem('adminData');
    }
    this.router.navigate(['']);
  }
}
