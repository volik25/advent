import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DayService } from '../services/days.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public userName!: string;
  public crop!: any;
  public photoCrop!: any;
  public photoSrc!: string;
  public days: any;
  constructor(private api: ApiService, private dS: DayService) {
    this.days = this.dS.daysArray;
  }

  ngOnInit(): void {
    this.api.getPhoto().subscribe((res: any) => {
      if (res.response) {
        this.userName = `${res.response[0].last_name} ${res.response[0].first_name}`;
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
}
