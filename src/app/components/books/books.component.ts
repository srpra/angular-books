import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BOOKS } from '../../mock-books';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  //selectedBook?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  // onSelect(book: Book): void {
  //   this.selectedBook = book;
  // }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }
  delete(book: Book): void {
    this.bookService.deleteBook(book.id).subscribe();
    this.books = this.books.filter((b) => b !== book);
  }


}
