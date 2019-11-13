import { Component } from '@angular/core';
import { faSearch, faBookmark, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faSearch = faSearch;
  faBookmark = faBookmark;
  faSignIn = faSignInAlt;

  search = new FormGroup({
    title: new FormControl('')
  });

}
