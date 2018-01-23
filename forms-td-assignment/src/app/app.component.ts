import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('frm') dataForm: NgForm;
  defaultSubscription: 'Advance';
  subscriptions = ['Basic', 'Advance', 'Pro'];
  submitted = false;
  data = {
    email: '',
    subs: '',
    pass: ''
  };

  onFormSubmit() {
    this.submitted = true;

    this.data.email = this.dataForm.value.email;
    this.data.subs = this.dataForm.value.subs;
    this.data.pass = this.dataForm.value.pass;

    this.dataForm.reset();
  }
}
