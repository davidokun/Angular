import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.invalidProjectNames]),
      'name': new FormControl(null, Validators.required, this.invalidProjectNamesAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmitForm() {
    console.log(this.projectForm);
  }

  invalidProjectNames(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsInvalid': true};
    }
    return null;
  }

  invalidProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsInvalid': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
