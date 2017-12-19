import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './book/books.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent, BookListComponent]
})
export class BooksModule { }
