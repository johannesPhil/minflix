import {required, compare, alpha, minLength, email } from '@rxweb/reactive-form-validators';

export class User{

  @required({message: 'Required'})
  @alpha({message: 'Only Alphabetic characters allowed'})
  @minLength({value: 3, message: 'Name should contain at lest 3 characters'})
  name: string;

  @email({message: 'Invalid email format'})
  mail: string;

  @required({message: 'Required'})
  @minLength({value: 6, message: 'Password should contain at least 6 characters'})
  password: string;

  @required({message: 'Required'})
  @compare({fieldName: 'password', message: 'Passwords do not match'})
  confirmPassword: string;

}
