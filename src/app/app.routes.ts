// TODO: add routes
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';

const APP_ROUTER_PROVIDERS: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListComponent
  }
];
export const ROUTING = RouterModule.forRoot(APP_ROUTER_PROVIDERS);
