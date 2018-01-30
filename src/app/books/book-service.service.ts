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

}
