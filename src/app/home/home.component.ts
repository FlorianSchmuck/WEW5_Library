import {Component, OnInit} from "@angular/core";
import {AuthenticatedUserService} from "../shared/authenticated-user.service";
import {LoginService} from "./login.service";
import {Login} from "./login.model";
import {User} from "../users/model/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  login: Login;
  authenticatedUser: User;

  constructor(private authenticatedUserService: AuthenticatedUserService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.login = new Login();
    this.authenticatedUser = this.authenticatedUserService.authenticatedUser;
  }

  submit() {
    this.loginService.authenticate(this.login).subscribe((user) => {
      this.authenticatedUserService.authenticatedUser = user;
      this.authenticatedUser = user;
    }, (error) => {
      alert(error.error.message);
      this.authenticatedUserService.authenticatedUser = null;
    });
  }

}
