import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendService} from "./backend.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticatedUserService} from "./authenticated-user.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [BackendService, AuthenticatedUserService]
})
export class SharedModule {
}
