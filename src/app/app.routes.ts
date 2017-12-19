// TODO: add routes
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books/books.component';

const APP_ROUTER_PROVIDERS: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksComponent
  }
];
export const ROUTING = RouterModule.forRoot(APP_ROUTER_PROVIDERS);
