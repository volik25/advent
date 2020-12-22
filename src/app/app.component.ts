import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  @HostListener('document:keydown.control.m') doSth(){
    this.router.navigate(['/admin']);
  }

  constructor(private router: Router) {}
}
