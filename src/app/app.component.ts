import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm;
  defaultValue = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      defaultValue: '',
      gender: 'male'
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
