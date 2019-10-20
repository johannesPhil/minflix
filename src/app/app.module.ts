import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviecardComponent } from './moviecard/moviecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, MoviecardComponent]
})
export class AppModule { }
