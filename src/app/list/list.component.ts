import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // listArray: Array<String>

  listArray=[]

  addList(value) {
    this.listArray.push(value)
    console.log(this.listArray)

  }
  constructor() { }

  ngOnInit() {
  }

}
