import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'my-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.bookService.getBook(id)
            .then(book => this.book = book);
      } else {
        this.navigated = false;
        this.book = new Book();
      }
    });
  }

  save(): void {
    this.bookService
        .save(this.book)
        .then(book => {
          this.book = book; // saved book, w/ id if new
          this.goBack(book);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedBook: Book = null): void {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }
}
