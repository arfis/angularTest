import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  @HostListener('window:keydown',['$event'])
  keydownListener(event: KeyboardEvent) {
    console.log('keydown from matrix');
  }

  constructor() { }

  ngOnInit() {
  }

}
