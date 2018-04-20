import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';

import { MusicsComponent } from './musics.component';
import { MusicDetailComponent } from './music-detail.component';

import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'music',
    component: MusicsComponent
  },
  {
    path: 'music/:id',
    component: MusicDetailComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent, MoviesComponent, MovieDetailComponent, BooksComponent, BookDetailComponent, MusicsComponent, MusicDetailComponent];
