import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BooksComponent} from "./book/books.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookService} from "./book-service.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [BooksComponent, BookListComponent, NewBookComponent],
  providers: [BookService]
})
export class BooksModule {
}
