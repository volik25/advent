import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  public users!: any[];
  public headers: string[] = ['user_id', 'self_name', 'domain'];
  constructor(private api: ApiService, private vkApi: vkApiService) { }

  ngOnInit(): void {
    this.api.getAnswers().subscribe(res => {
      this.users = res;
      let ids = '';
      res.forEach((users: { user_id: any; }) => {
        ids += `${users.user_id},`;
      });
      ids = ids.substring(0, ids.length - 1);
      this.vkApi.getLink(ids).subscribe(({response}) => {
        response.forEach((userDomain: { id: any; domain: any; }) => {
          this.users.forEach(user => {
            if (userDomain.id == user.user_id) {
              user['domain'] = userDomain.domain;
            };
          });
        });
        this.checkDate();
      })
    })
  }

  private checkDate() {
    this.api.getDate().subscribe((date: string) => {
      let day = parseInt(date.substring(0, 2));
      let mY = date.substring(3).split('/')
      if (parseInt(mY[0]) === 12 && parseInt(mY[1]) === 2020) {
        for (let i = 21; i < 27; i++) {
          if (i <= day) {
            this.headers.push(`Вопрос от ${i}.12`);
          }
        }
      }
    })
  }

}
