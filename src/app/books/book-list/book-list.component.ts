import {Component, OnInit} from "@angular/core";
import {Book} from "../model/book.model";
import {BookService} from "../book-service.service";
import {AuthenticatedUserService} from "../../shared/authenticated-user.service";
import {User} from "../../users/model/user";
import {UserRoles} from "../../shared/user-roles";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})

export class BookListComponent implements OnInit {

  books: Array<Book>;
  authUser: User;

  constructor(private bookService: BookService,
              private authService: AuthenticatedUserService) {
    this.books = [];
    this.authUser = authService.authenticatedUser;
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books) => {
      this.books = books;
    });
  }

  public deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe((deletedBook) => {
      const bookToDelete = this.books.find((b) => {
        return b.isbn === deletedBook.isbn;
      });
      this.books.splice(this.books.indexOf(bookToDelete), 1);
    });
  }

  public checkIfUserHasRight() {
    return this.authUser && this.authUser.role === UserRoles.ADMIN;
  }

  checkIfBookCanBeBorrowed(book: Book) {
    if (this.authUser) {
      return book.available && this.authUser.role !== UserRoles.ADMIN;
    }
  }

  borrowBook(book) {
    book.available = false;
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 14);
    book.returnDate = returnDate.toISOString();
    this.bookService.updateBook(book).subscribe((updateBook) => {
      const foundBook = this.books.find((bookToFind) => {
        return bookToFind.isbn === updateBook.isbn;
      });
      this.books.splice(this.books.indexOf(foundBook), 1, updateBook);
    });
  }
}
