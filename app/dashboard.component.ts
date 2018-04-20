import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Movie } from './movie';
import { MovieService } from './movie.service';

import { Music } from './music';
import { MusicService } from './music.service';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  movies: Movie[] = [];
  musics: Music[] = [];
  books: Book[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private movieService: MovieService,
    private musicService: MusicService,
    private bookService: BookService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    this.movieService.getMovies()
      .then(movies => this.movies = movies.slice(1, 5));
    this.musicService.getMusics()
      .then(musics => this.musics = musics.slice(1, 5));
    this.bookService.getBooks()
      .then(books => this.books = books.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

  gotoMovies(movie: Movie): void {
    let movieLink = ['/movies', movie.id];
    this.router.navigate(movieLink);
  }

  gotoMusics(music: Music): void {
    let musicLink = ['/music', music.id];
    this.router.navigate(musicLink);
  }

   gotoBooks(movie: Movie): void {
    let bookLink = ['/books', movie.id];
    this.router.navigate(bookLink);
  }


}
