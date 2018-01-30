import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book.model';
import {BackendService} from '../../shared/backend.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private backendService: BackendService) {
    this.books = [];
  }

  ngOnInit() {
    const book1 = this.createBook('Book1', true, '1253456');
    const book2 = this.createBook('Book2', false, '253456');
    const book3 = this.createBook('Book3', true, '53456');
    const book4 = this.createBook('Book4', false, '3456');
    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
    this.books.push(book4);
    this.backendService.get('books').subscribe((books) => {
      this.books = books;
    });
  }

  createBook(title: string, available: boolean, isbn: string): Book {
    const book = new Book();
    book.title = title;
    book.available = available;
    book.isbn = isbn;
    return book;
  }

  borrowBook(bookToBorrow: Book) {
    bookToBorrow.available = false;
    console.log(bookToBorrow);
    // TODO: update in backend
  }

  isUserAdmin() {
    return true;
  }

}
