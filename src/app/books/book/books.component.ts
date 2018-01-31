import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book-service.service";
import {Book} from "../model/book.model";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {

  private isbn: string;
  private selectedBook: Book;
  private books: Array<Book>;
  private editMode = false;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.isbn = params["id"];
    });
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
      this.selectedBook = this.books.find((b) => {
        return b.isbn === this.isbn;
      });
    });
  }

  public changeBook() {
    this.editMode = true;
  }

  public updateBook() {
    this.bookService.updateBook(this.selectedBook).subscribe((updatedBook) => {
      let bookToUpdate = this.books.find((book) => {
        return book.isbn === updatedBook.isbn;
      });
      bookToUpdate = updatedBook;
    });
  }

}
