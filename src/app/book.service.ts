import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl='http://localhost:5000/books';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    // TODO: change mock data to API call
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }
  updateBook(book: Book) {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, this.httpOptions);
  }
  deleteBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url, this.httpOptions);
  }




}