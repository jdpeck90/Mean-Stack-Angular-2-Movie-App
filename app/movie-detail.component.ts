import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'my-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.movieService.getMovie(id)
            .then(movie => this.movie = movie);
            console.log(this +" ngOnInit if")
      } else {
        this.navigated = false;
        this.movie = new Movie();
      }
    });
  }

  save(): void {
    this.movieService
        .save(this.movie)
        .then(movie => {
          this.movie = movie; // saved movie, w/ id if new
          this.goBack(movie);
          console.log(this)
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedMovie: Movie = null): void {
    this.close.emit(savedMovie);
    if (this.navigated) { window.history.back(); }
  }
}
