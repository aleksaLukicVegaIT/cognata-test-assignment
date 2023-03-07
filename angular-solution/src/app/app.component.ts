import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arrayPrintValue = ""

  ngOnInit(): void {
    this.setArrayPrintValue()
  }

  setArrayPrintValue(){
    const array = Array.from(Array(101).keys())
    this.arrayPrintValue = array.toString()
  }


}
