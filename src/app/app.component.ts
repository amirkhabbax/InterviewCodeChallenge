import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleAdsFeeService } from '../shared/google-ads-fee.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'InterviewCodeChallenge';
  constructor(private _GoogleAdsFeeService : GoogleAdsFeeService){
  }

  ngOnInit(): void {
    console.log(this._GoogleAdsFeeService.calculateFeeRate(50000000));
    console.log(this._GoogleAdsFeeService.calculateFeeRate(51000000));
    console.log(this._GoogleAdsFeeService.calculateFeeRate(90000000));
    console.log(this._GoogleAdsFeeService.calculateFeeRate(91000000));
    console.log(this._GoogleAdsFeeService.calculateFeeRate(120000000));
    console.log(this._GoogleAdsFeeService.calculateFeeRate(121000000));
  }
}
