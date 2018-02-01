import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book-service.service";
import {Book} from "../model/book.model";
import {AuthenticatedUserService} from "../../shared/authenticated-user.service";
import {User} from "../../users/model/user";
import {UserRoles} from "../../shared/user-roles";

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
  private authUser: User;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
              private authService: AuthenticatedUserService) {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.isbn = params["id"];
    });
    this.authUser = this.authService.authenticatedUser;
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

  public checkIfUserHasRight() {
    return this.authUser && this.authUser.role === UserRoles.ADMIN;
  }

  public updateBook() {
    this.bookService.updateBook(this.selectedBook).subscribe((updatedBook) => {
      let bookToUpdate = this.books.find((book) => {
        return book.isbn === updatedBook.isbn;
      });
      bookToUpdate = updatedBook;
    });
    this.router.navigateByUrl("/books");
  }

}
