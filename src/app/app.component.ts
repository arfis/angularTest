import {Component, ContentChild, HostListener, ViewChild} from '@angular/core';
import {Car} from "./car/car.model";
import {WheelComponent} from "./wheel/wheel.component";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars = [];
  keyUp;
  keypress;
  keydown;
  interval;
  isIntervalOn = false;

  key = '';
  opened = new BehaviorSubject(false);

  @ViewChild('wheel') component;

  @HostListener('window:keyup',['$event'])
  keyupListener(event: KeyboardEvent) {
    this.keyUp = event.keyCode;
    this.isIntervalOn = false;
    clearInterval(this.interval);
  }

  @HostListener('window:keypress',['$event'])
  keypressListener(event: KeyboardEvent) {
    this.keypress = event.keyCode;
  }

  @HostListener('window:keydown',['$event'])
  keydownListener(event: KeyboardEvent) {
    // this.isIntervalOn = true;
    console.log('keydown in app');
    this.key += 'd';
  }

  constructor() {
    this.interval = setInterval(() => {
      if (this.isIntervalOn) {
        this.key += 'c';
      }
    }, 1000);
    for (let i=0;i<10;i++) {
      console.log('creating car');
      let car = new Car();
      car.brand = 'audi';
      car.wheels = 4;

      this.cars.push(car);
    }
    console.log(this.cars);
  }

  addWheel() {
    this.cars[2] = Object.create(this.cars[2]);
    this.cars[2].wheels++;
    console.log(this.cars[2].wheels);
  }

  toggleWheels() {
    console.log(this.component);
    this.component.toggleWheels();
    console.log('after toggling wheels');
    //this.component.toggleWheels();
  }
}
