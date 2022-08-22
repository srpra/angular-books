import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BOOKS } from 'src/app/mock-books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = {
    id: 1,
    author: 'HBR',
    title: 'HBR at 100',
  };

  books=BOOKS;
  selectedBook?: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
