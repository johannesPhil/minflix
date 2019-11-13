import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { RxFormBuilder, ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';
import { User } from './user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  
 /*  nameError: string;
  mailError: string;
  passwordError: string;
  confirmError: string; */

  constructor(
    private formBuilder: RxFormBuilder
    ) { }

  ngOnInit() {
    const user = new User();

    this.signUpForm = this.formBuilder.formGroup(user);

    /* this.signUp = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signUp.valueChanges.subscribe(data => {
      console.log(data);
      this.nameError = '';
      this.mailError = '';
      this.passwordError = '';
      this.confirmError = '';

      const name = this.signUp.get('name');
      const mail = this.signUp.get('mail');
      const password = this.signUp.get('password');
      const confirmPassword = this.signUp.get('confirmPassword');

      if(name.invalid && name.dirty) {
        if(name.errors['required']){
            this.nameError = 'Name Is Required';
          }

        if(name.errors['minlength']) {
            this.nameError = 'Name Should be at least 2 characters';
          }
      }

      if(mail.invalid && mail.dirty){
        if(mail.errors['required']){
          this.mailError = 'Mail Is Required';
        }

        if(mail.errors['email']){
          this.mailError = 'Invalid Email format';
        }
      }

      if(password.invalid && password.dirty){
        if(password.errors['required']){
          this.passwordError = 'Password Is Required';
        }

        if(password.errors['minlength']){
          this.passwordError = 'Password should be at least 6 characters';
        }
      }

      if(confirmPassword.invalid && confirmPassword.dirty){
        if(password !== confirmPassword){
          this.confirmError = 'Passwords Do Not Match';
        }
      }

    }) */


  }

}
