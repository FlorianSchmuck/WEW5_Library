import {Component, OnInit} from "@angular/core";
import {Book} from "../model/book.model";
import {BookService} from "../book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-new-book",
  templateUrl: "./new-book.component.html",
  styleUrls: ["./new-book.component.css"]
})
export class NewBookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.book = new Book();
    this.book.available = true;
  }

  public createBook() {
    this.bookService.createNewBook(this.book).subscribe((newBook) => {
      this.book = newBook;
    });
    this.router.navigateByUrl("/books");
  }
}
