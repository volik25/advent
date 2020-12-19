import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-authentificate',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.less']
})
export class AuthentificateComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      faculty: ['', Validators.required],
      course: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.api.getUser().subscribe(res => {
      if (res.response) {
        this.userForm.get('userName')?.setValue(`${res.response[0].last_name} ${res.response[0].first_name}`);
      }
      if (res.error) {
        console.log(res.error);
      }
    })
  }

  public dataSave() {

  }
}
