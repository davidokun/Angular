import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  private signupForm: NgForm;
  private defaultQuestion = 'pet';
  private answer: '';
  private genders = ['Male', 'Female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmitForm(form: NgForm) {
  //   console.log(form);
  // }

  onSubmitForm() {
    console.log(this.signupForm);
  }
}
