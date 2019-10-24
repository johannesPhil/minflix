import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient ) { }

  API_KEY = '6f53f4a81ecef5f6a1f7440bb392e20b';

  public getMovie() {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=6f53f4a81ecef5f6a1f7440bb392e20b&language=en-US`);
  }
}
