import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  tableArray: number[] = [4, 2, 6];

  constructor() {}

  ngOnInit() {}

  addNewDiv(tableFor: number) {
    if (+tableFor === 2 || +tableFor === 4 || +tableFor === 6) {
      this.tableArray.push(tableFor);
    } else {
      window.alert('Invalid Input');
    }
    // const myDiv = document.createElement('div');
    // // let att1 = document.createAttribute('class');
    // // att1.value = 'table-for-' + tableFor;
    // // myDiv.setAttributeNode(att1);
    // myDiv.classList.add('table-for-' + tableFor);
    // let att1 = document.createAttribute('cdkDragBoundary');
    // att1.value = '.boundary';
    // myDiv.setAttributeNode(att1);
    // att1 = document.createAttribute('cdkDrag');
    // myDiv.setAttributeNode(att1);
    // const innerText = document.createTextNode('Table for ' + tableFor);
    // myDiv.appendChild(innerText);

    // const element = document.getElementById('areaDiv');
    // element.appendChild(myDiv);

    // this.myHTML = this.myHTML +
    //   '<div class="table-for-' +
    //   tableFor +
    //   '" cdkDragBoundary=".boundary" cdkDrag>' +
    //   'table-for-' +
    //   tableFor +
    //   '</div>';
  }
}
