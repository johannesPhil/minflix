import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

movieDetails;
vote;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovieInfo().subscribe((response) => {
      this.movieDetails = response;
      this.vote = this.movieDetails.vote_average * 10;
      console.log(this.movieDetails);
    })
  }

}
