import {Component, OnInit} from "@angular/core";
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = [];
  }


  ngOnInit() {
      this.userService.getAllUsers().subscribe((allusers) => {
      this.users = allusers;
    })
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
