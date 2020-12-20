import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.less']
})
export class AuthentificateComponent implements OnInit {
  public userForm: FormGroup;
  private userId: any;
  constructor(private api: ApiService, private vkApi: vkApiService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      self_name: ['', Validators.required],
      faculty: ['', Validators.required],
      course: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.vkApi.getUser().subscribe(res => {
      if (res.response) {
        let userName = `${res.response[0].last_name} ${res.response[0].first_name}`;
        this.userId = res.response[0].id
        let user = {
          user_id: this.userId,
          vk_name: userName,
          self_name: userName
        }
        this.api.getUserData(res.response[0].id).subscribe(userData => {
          if (userData) {
            this.userForm.patchValue(userData);
          }
          else {
            this.api.addUser(user).subscribe(() => {
              this.userForm.get('userName')?.setValue(userName);
            })
          }
        })
      }
      if (res.error) {
        console.log(res.error);
      }
    })
  }

  public dataSave() {
    let user = this.userForm.getRawValue();
    user['user_id'] = this.userId;
    this.api.updateUser(user).subscribe(res => {
      console.log(res);
      this.router.navigate(['']);
    })
  }
}
