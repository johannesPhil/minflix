import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [],
  // tslint:disable-next-line: max-line-length
  bootstrap: [AppComponent]
})
export class AppModule { }
