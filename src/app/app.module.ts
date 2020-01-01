import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviecardComponent,
    SignupComponent,
    SigninComponent,
    MovieinfoComponent,
    AccountComponent,
    HomeComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'minflix'),
    AngularFirestoreModule, // Only required for database features
    AngularFireStorageModule, // Only required for storage features
    NgCircleProgressModule.forRoot({
    
    })
  ],
  providers: [AuthenticationService],
  // tslint:disable-next-line: max-line-length
  bootstrap: [AppComponent]
})
export class AppModule { }
