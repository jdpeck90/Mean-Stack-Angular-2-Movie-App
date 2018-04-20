import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'my-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  addingBook = false;
  error: any;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService
      .getBooks()
      .then(books => this.books = books)
      .catch(error => this.error = error);
  }

  addBook(): void {
    this.addingBook = true;
    this.selectedBook = null;

  }

  close(savedBook: book): void {
    this.addingBook = false;
    if (savedBook) { this.getBooks(); }
  }

  deleteBook(book: book, event: any): void {
    event.stopPropagation();
    this.bookService
      .delete(book)
      .then(res => {
        this.books = this.books.filter(h => h !== book);
        if (this.selectedBook === book) { this.selectedBook = null; }
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.addingBook = false;
  }

  gotoBooks(): void {
    this.router.navigate(['/books', this.selectedBook.id]);
  }
}
