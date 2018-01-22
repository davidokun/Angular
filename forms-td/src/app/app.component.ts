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

    // Override ALL Form's inputs with values
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'Female'
    // });

    // Just override specific form's values
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmitForm(form: NgForm) {
  //   console.log(form);
  // }

  onSubmitForm() {
    console.log(this.signupForm);
  }
}
