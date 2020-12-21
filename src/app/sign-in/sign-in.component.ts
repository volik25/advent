import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  adminForm: FormGroup
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.adminForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public signIn() {
    let admin = this.adminForm.getRawValue();
    this.api.signIn(admin).subscribe(res => {
      if (res) {
        sessionStorage.setItem('adminData', admin);
        this.router.navigate(['/admin']);
      }
    })
  }
}
