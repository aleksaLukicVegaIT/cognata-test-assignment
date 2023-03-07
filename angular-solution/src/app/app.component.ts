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
    this.arrayPrintValue = Array.from(Array(100).keys()).map((item) => item + 1).toString()
  }
}
