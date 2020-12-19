import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Answer, answers, BaseAnswer } from '../models/answer.model';

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
  public answerControl: FormControl = new FormControl('');
  public disabledButton: boolean = true;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.answerId = params['id'];
      this.answer = answers.find(x => x.id == this.answerId) || BaseAnswer;
      this.bgUrl = this.answer?.bgUrl || '';
      this.cardColor = this.answer?.cardColor || '';
      this.pageImgs = this.answer?.images || [];
      this.imgsClass = this.answer.class || '';
    })
    this.answerControl.valueChanges.subscribe(value => {
      if (value) {
        this.disabledButton = false
      }
      else {
        this.disabledButton = true
      }
    })
  }

  ngOnInit(): void {
  }

}
