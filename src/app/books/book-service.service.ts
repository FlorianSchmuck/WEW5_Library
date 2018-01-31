import {Injectable} from "@angular/core";
import {BackendService} from "../shared/backend.service";
import {Book} from "./model/book.model";

@Injectable()
export class BookService {


  constructor(private backendService: BackendService) {
  }

  getAllBooks() {
    return this.backendService.get("books");
  }

  updateBook(selectedBook: Book) {
    return this.backendService.put("/books/" + selectedBook.isbn, selectedBook);
  }

  createNewBook(book: Book) {
    return this.backendService.post("/books", book);
  }

  deleteBook(book: Book) {
    return this.backendService.delete("/books/" + book.isbn);
  }
}
