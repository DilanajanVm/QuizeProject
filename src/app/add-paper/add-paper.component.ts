import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;
  isOptional = false;
  public isVisible = false;
  count : number = 1;
  answerCountAdd : number = 1;

  // @ts-ignore
  countOfQuiz =  this.countArry(this.count);
  public loopArray: any[] | undefined;
  public loopAnswer: any[] | undefined;
  constructor(private _formBuilder: FormBuilder) {

  }

  // @ts-ignore
  // @ts-ignore
  public styleList={
    display:"none"
  };


  getValue(value: string,answerCount: string) {
    this.styleList={
      display:"block"
    };

    this.count = +value;
    this.answerCountAdd = +answerCount;
    console.log(this.count+'this is count'+this.answerCountAdd+'=========');

    this.loopArray = new Array();
    this.loopAnswer = new Array();

    for (let a =0; a<this.count; a++){
      console.log(a+'This');
      this.loopArray.push(a);
    }
    for (let b =0; b<this.answerCountAdd; b++){
      console.log(b+'methana');
      this.loopAnswer.push(b);
    }

    this.isVisible=true;

  }

  private countArry(number: any) {
    console.log('wada==='+number);
    return new Array(number);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });



  }

  //
  // getValue(value: string, value2: string) {
  //
  // }
}
