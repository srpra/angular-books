import { Component, Input, OnInit } from '@angular/core';
import {Book} from '../../book';
import { BookService } from 'src/app/book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book?:Book
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.book) {
      this.bookService.updateBook(this.book).subscribe(() => this.goBack());
    }
  }



    // console.log('Our book detail id:', id);
  





}
