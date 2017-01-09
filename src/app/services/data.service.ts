import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getMovies(): Observable<any> {
    return this.http.get('/movie').map(res => res.json());
  }

  addMovie(movie): Observable<any> {
    return this.http.post("/movie", JSON.stringify(movie), this.options);
  }

  editMovie(movie): Observable<any> {
    return this.http.put(`/movie/${movie._id}`, JSON.stringify(movie), this.options);
  }

  deleteMovie(movie): Observable<any> {
    return this.http.delete(`/movie/${movie._id}`, this.options);
  }
}
