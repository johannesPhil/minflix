import { Component, OnInit } from '@angular/core';
import { faSearch, faHeart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faHeart = faHeart;
  faSignIn = faSignInAlt;

  constructor() { }

  search = new FormGroup({
    title: new FormControl('')
  });

  ngOnInit() {
  }

}
