import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrls: ['./assigment3.component.css']
})
export class Assigment3Component {

  isDisplayed = false;
  clickCount = [];
  count = 0;

  toggle() {
    this.count++;
    this.isDisplayed = this.isDisplayed !== true;
    this.clickCount.push(this.count);
  }

}
