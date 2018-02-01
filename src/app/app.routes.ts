// TODO: add routes
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./books/book-list/book-list.component";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {UserComponent} from "./users/user/user.component";
import {BooksComponent} from "./books/book/books.component";
import {NewBookComponent} from "./books/new-book/new-book.component";
import {HomeComponent} from "./home/home.component";
import { NewUserComponent } from "./users/new-user/new-user.component";

const APP_ROUTER_PROVIDERS: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "books",
    component: BookListComponent
  },
  {
    path: "books/:id",
    component: BooksComponent
  },
  {
    path: "newbook",
    component: NewBookComponent
  },
  {
    path: "users",
    component: UsersListComponent
  },
  {
    path: "users/:id",
    component: UserComponent
  },
  {
    path: "newusers",
    component: NewUserComponent
  }
];
export const ROUTING = RouterModule.forRoot(APP_ROUTER_PROVIDERS);
