import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Car} from "./car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent implements OnInit, OnChanges {

  @Input() car: Car;

  change = 0;

  constructor() {
    console.log(this.car);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['car']);
    if(changes['car']) {
      console.log('changes');
      this.change++;
    }
  }

  ngOnInit() {
  }


  get brand() {
    return this.car.brand;
  }

  get wheels() {
    return this.car.wheels;
  }
}
