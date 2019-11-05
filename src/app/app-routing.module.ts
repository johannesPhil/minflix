import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'signup', component : SignupComponent },
  { path : 'signin', component : SigninComponent },
  { path : 'movie', component : MovieinfoComponent },
  { path : 'account', component : AccountComponent },
  { path : 'favourite', component : FavouriteComponent },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
