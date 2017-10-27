import { Component, OnInit } from '@angular/core';
import {Car} from "./car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  
  constructor() { }

  ngOnInit() {
  }

}
