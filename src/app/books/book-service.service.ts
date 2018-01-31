import {Injectable} from "@angular/core";
import {BackendService} from "../shared/backend.service";
import {Book} from "./model/book.model";

@Injectable()
export class BookService {

  private books: Array<Book>;

  constructor(private backendService: BackendService) {
    this.backendService.get("books").subscribe((books) => {
      this.books = books;
    });
  }

  get allBooks(): Array<Book> {
    return this.books;
  }

  updateBook(selectedBook: Book) {
    this.backendService.put("/books/" + selectedBook.isbn, selectedBook).subscribe((updatedBook) => {
      let bookToUpdate = this.books.find((book) => {
        return book.isbn === updatedBook.isbn;
      });
      bookToUpdate = updatedBook;
    });
  }
}
