import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BooksModule} from "./books/books.module";
import {ROUTING} from "./app.routes";
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./users/user.module";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    SharedModule,
    FormsModule,
    UserModule,
    HomeModule,
    ROUTING
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
