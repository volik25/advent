import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public userData!: any;
  public photoSrc!: string;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPhoto().subscribe((res: any) => {
      if (res.response) {
        this.userData = res.response[0];
        this.photoSrc = this.userData.crop_photo.photo.sizes[0].url;
      }
      if (res.error) {
        console.log(res.error);
      }
    })
  }
}
