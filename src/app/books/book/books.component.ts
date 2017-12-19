import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../model/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input() selectedBook: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
