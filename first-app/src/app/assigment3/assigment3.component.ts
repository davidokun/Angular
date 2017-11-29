import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrls: ['./assigment3.component.css']
})
export class Assigment3Component {

  isDisplayed = false;
  clickCount = [];

  toggle() {

    this.isDisplayed = this.isDisplayed !== true;
    this.clickCount.push(this.clickCount.length + 1);
  }

}
