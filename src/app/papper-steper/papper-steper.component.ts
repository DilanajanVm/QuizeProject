import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-papper-steper',
  templateUrl: './papper-steper.component.html',
  styleUrls: ['./papper-steper.component.css']
})
export class PapperSteperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup |any;
  secondFormGroup: FormGroup |any;

  @Input() countArray: any[] | undefined;
  @Input() visible: boolean | undefined;

  constructor(private _formBuilder: FormBuilder) {}

  public displayEndNone={
    display:"none"
  };

  public displayEndOk={
    display:"block"
  };

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
