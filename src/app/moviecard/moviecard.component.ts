import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {
  faHeart = faHeart;

  movies;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getMovie().subscribe((data) => {
      this.movies = data['results'];
    });
  }

}
