import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    // Inject firebase Auth service

    public minAuth: AngularFireAuth,

    // Inject Router

    private router: Router
  ) {

   }

   signup(email, password) {
      return this.minAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
              window.alert("Sign Up Successful");
              console.log(result.user);
            })
            .catch((error) => {
              window.alert(error.message);
            })
   }

   signin(email, password) {
     return this.minAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
              this.router.navigate(['home']);
            })
            .catch((error) =>{
              window.alert(error.message)
            })
   }
}


