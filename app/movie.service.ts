import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {
  private moviesUrl = 'app/movies';  // URL to web api

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http
      .get(this.moviesUrl)
      .toPromise()
      .then(response => response.json().data as Movie[])
      .catch(this.handlerror);
  }

  getMovie(id: number): Promise<Movie> {
    return this.getMovies()
      .then(movies => movies.find(movie => movie.id === id));
  }

  save(movie: Movie): Promise<Movie> {
    if (movie.id) {
      return this.put(movie);
    }
    return this.post(movie);
  }

  delete(movie: Movie): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.moviesUrl}/${movie.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handlerror);
  }

  // Add new movie
  private post(movie: Movie): Promise<Movie> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.moviesUrl, JSON.stringify(movie), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handlerror);
  }

  // Update existing movie
  private put(movie: Movie): Promise<Movie> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.moviesUrl}/${movie.id}`;

    return this.http
      .put(url, JSON.stringify(movie), { headers: headers })
      .toPromise()
      .then(() => movie)
      .catch(this.handleError);
  }

  private handlerror(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
