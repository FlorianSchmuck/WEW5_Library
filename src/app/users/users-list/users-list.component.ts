import {Component, OnInit} from "@angular/core";
import {Component, OnInit} from "@angular/core";
import {User} from "../model/user";
import {UserStorageService} from "../services/userstorage.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserStorageService) {
    this.users = [];
  }


  ngOnInit() {
    this.users = this.userService.users;
  }

  createUser(name: string, eMail: string, pw: string, privatebckey: string, id: number): User {
    let user = new User();
    user.firstname = name;
    user.eMail = eMail;
    user.password = pw;
    user.bitCoinWalletPrivateKey = privatebckey;
    user.userId = id;
    return user;
  }

  showDetailUser() {
    console.log("tests");
  }

}
