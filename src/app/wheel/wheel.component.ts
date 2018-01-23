import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css'],

})
export class WheelComponent implements OnInit {

  @Input() show;

  @Input() count = 3;

  constructor() { }

  ngOnInit() {
  }

  public toggleWheels() {
    console.log('toggling wheels');
    console.log(this);
    console.log(this.show);
    console.log(this.count);
    this.show = !this.show;
    this.count++;
  }
}
