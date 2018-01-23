import {
  Component,
  ViewChild
} from '@angular/core';

import {HotTableComponent} from "ng2-handsontable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @ViewChild(HotTableComponent) hotTable: any;
  @ViewChild('scrollContainer') scrollContainer;


  colHeaders = [
    'name',
    'color',
  ];
  colWidths;

  public columns = [
    {
      data: 'name',
      renderer: 'text'
    },
    {
      data: 'color',
      renderer: 'text'
    }
  ];

  data = [];
  options: any = {
    width: 400,
    height: 550,
    stretchH: 'all',
    currentRowClassName: 'current-row',
    currentColClassName: 'current-col',
    columnSorting: true,
    contextMenu: true,
    wordWrap: false,
    className: 'htCenter htMiddle',
    multiSelect: true,
    readOnly: true
  };

constructor() {
  for (let i = 0; i < 200; i++) {
    this.data.push({name: 'name', color: 'color'})
  }
}
  public beforeTableKeyDown(event) {
  event[0].stopImmediatePropagation();
    // event[0].isImmediatePropagationEnabled = false;
    // event[0].isImmediatePropagationStopped = function(){
    //   return true;
    // };
    console.log('trying to stop', event);
  }

}
