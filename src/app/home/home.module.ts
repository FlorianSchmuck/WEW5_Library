import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {LoginService} from "./login.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  providers: [LoginService]
})
export class HomeModule {
}
