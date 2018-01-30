import {Component, OnInit} from "@angular/core";
import {Book} from "../model/book.model";
import {BookService} from "../book-service.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = [];
  }

  ngOnInit() {
    this.books = this.bookService.allBooks;
  }

}
