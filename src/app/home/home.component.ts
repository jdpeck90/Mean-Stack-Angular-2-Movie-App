import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movies = [];
  private isLoading = true;

  private  movie = {};
  private isEditing = false;

  private addMovieForm: FormGroup;
  private movieName = new FormControl("", Validators.required);
  private movieYear = new FormControl("", Validators.required);
  private movieRating = new FormControl("", Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

     this.getMovies();

    this.addMovieForm = this.formBuilder.group({
      movieName: this.movieName,
      movieYear: this.movieYear,
      movieRating: this.movieRating
    });

  }


  getMovies() {
    this.dataService.getMovies().subscribe(
      data => this.movies = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }


  addMovie() {
    this.dataService.addMovie(this.addMovieForm.value).subscribe(
      res => {
        var newMovie = res.json();
        this.movies.push(newMovie);
        this.addMovieForm.reset();
        this.toast.setMessage("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(movie) {
    this.isEditing = true;
    this.movie = movie;
  }

  cancelEditing() {
    this.isEditing = false;
    this.movie = {};
    this.toast.setMessage("item editing cancelled.", "warning");
    this.getMovies();
  }

  editMovie(movie) {
    this.dataService.editMovie(movie).subscribe(
      res => {
        this.isEditing = false;
        this.movie = movie;
        this.toast.setMessage("item edited successfully.", "success");
      },
      error => console.log(error)
    );
  }


  deleteMovie(movie) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.dataService.deleteMovie(movie).subscribe(
        res => {
          var pos = this.movies.map(movie => { return movie._id }).indexOf(movie._id);
          this.movies.splice(pos, 1);
          this.toast.setMessage("item deleted successfully.", "success");
        },
        error => console.log(error)
      );
    }
  }

}
