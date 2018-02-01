import {Component, OnInit} from "@angular/core";
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import { AuthenticatedUserService } from "../../shared/authenticated-user.service";
import { UserRoles } from "../../shared/user-roles";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: Array<User>;  
  authUser: User;

  constructor(private userService: UserService, private authService: AuthenticatedUserService) {
    this.users = [];
    this.authUser = authService.authenticatedUser;
  }


  ngOnInit() {
      this.userService.getAllUsers().subscribe((allusers) => {
      this.users = allusers;
    })
  }

  public checkIfUserHasRight() {
    return this.authUser && this.authUser.role === UserRoles.ADMIN;
  }

  deleteUser(user:User){
    this.userService.deleteUser(user).subscribe((todelete)=> {
      const deleted = this.users.find((findtodelete) => {
        return findtodelete.userId === todelete.userId;
      });
      this.users.splice(this.users.indexOf(deleted), 1);
    });
    console.log("deleted");
  }

}
