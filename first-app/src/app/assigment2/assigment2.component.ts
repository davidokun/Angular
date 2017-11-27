import {Component} from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component {

  userName = '';
  buttonEnabled = false;

  onTextChange() {
    if (this.userName !== '') {
      this.buttonEnabled = true;
    } else {
      this.buttonEnabled = false;
    }
  }

  onButtonClick() {
    this.userName = '';
    this.buttonEnabled = false;
  }
}
