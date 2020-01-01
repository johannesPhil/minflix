import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient ) { }

  url: string = window.location.href;
  segmentedUrl = this.url.split('=');
  urlId = this.segmentedUrl[1];

  API_KEY = '6f53f4a81ecef5f6a1f7440bb392e20b';

  
  public getMovie() {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US`);
  }

  public getMovieInfo(){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.urlId}?api_key=${this.API_KEY}&language=en-US`)
  }
}
