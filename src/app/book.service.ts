import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks(): Book[] {
    // TODO: change mock data to API call
    return BOOKS;
  }

  getBook(id: number): Book {
    // For now, assume that a book with the specified 'id' always exists
    const book = BOOKS.find((b) => b.id === id)!;
    return book;
  }



}