import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Answer, answers, BaseAnswer } from '../models/answer.model';
import { ApiService } from '../services/api.service';
import { vkApiService } from '../services/vkApi.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.less']
})
export class AnswerComponent implements OnInit {
  private answerId!: number;
  public answer!: Answer;
  public bgUrl!: string;
  public cardColor!: string;
  public pageImgs!: string[];
  public imgsClass!: string;
  public btnClass!: string;
  public user_id!: number;
  private isFirstly: boolean = true;
  public answerControl: FormControl = new FormControl('');
  public disabledButton: boolean = true;
  constructor(private route: ActivatedRoute, private vkApi: vkApiService, private api: ApiService, private router: Router) {
    route.params.subscribe(params => {
      this.answerId = params['id'];
      this.answer = answers.find(x => x.id == this.answerId) || BaseAnswer;
      this.bgUrl = this.answer?.bgUrl || '';
      this.cardColor = this.answer?.cardColor || '';
      this.pageImgs = this.answer?.images || [];
      this.imgsClass = this.answer.class || '';
      this.btnClass = this.answer.btnClass || '';
    })
    this.answerControl.valueChanges.subscribe(value => {
      if (value && this.isFirstly) {
        this.disabledButton = false
      }
      else {
        this.disabledButton = true
      }
    })
  }

  ngOnInit(): void {
    this.vkApi.getUser().subscribe(res => {
      this.user_id = res.response[0].id;
      let answer = {
        answer_id: this.answerId,
        user_id: this.user_id
      }
      this.api.getAnswer(answer).subscribe(answer => {
        if (answer) {
          this.answerControl.setValue(answer.answer);
          this.answerControl.disable();
          this.disabledButton = true;
          this.isFirstly = false;
        }
      })
    })
  }

  public sendAnswer() {
    let answer = {
      answer_id: this.answerId,
      answer: this.answerControl.value,
      user_id: this.user_id
    };
    this.api.addAnswer(answer).subscribe(res => {
      this.router.navigate(['']);
    })
  }
}
