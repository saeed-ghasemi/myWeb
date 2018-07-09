import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // listArray: Array<String>   //two different ways how we define arrays in type script
  listArray = []

  /*add item*/
  addList(value){
  if(value!==""){
  this.listArray.push(value)
}else{
  alert('Field required **')
}

}
  /*delete item*/
  deleteName(list) {
    for (let i = 0; i <= this.listArray.length; i++) {
      if (list == this.listArray[i]) {
        this.listArray.splice(i, 1)
      }
    }
  }

  // submit Form
  listSubmit(value: any) {
    if (value !== "") {
      this.listArray.push(value.todo)
    } else {
      alert('Field required **')
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
