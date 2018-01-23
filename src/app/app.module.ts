import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { WheelComponent } from './wheel/wheel.component';
import { TableComponent } from './table/table.component';
import { MatrixComponent } from './matrix/matrix.component';
import {HotTableModule} from "ng2-handsontable";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    WheelComponent,
    TableComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
