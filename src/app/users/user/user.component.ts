import {Component, OnInit} from "@angular/core";
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  private userId: number;
  public selectedUser: User;
  private users: Array<User>;
  private editMode = false;

  constructor(private route: ActivatedRoute,
  private userService: UserService,
  private router: Router) {
      this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.userId = +params["id"];
    });
  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe((books) => {
      this.users = books;
      this.selectedUser = this.users.find((b) => {
        return b.userId === this.userId;
      });
    });
  }
  public changeUser() {
    this.editMode = true;
  }

  public updateUser() {
    console.log(this.selectedUser);
    this.userService.updateUser(this.selectedUser).subscribe((updatedUser) => {
      let userToUpdate = this.users.find((user) => {
        return user.userId === updatedUser.isbn;
      });
      userToUpdate = updatedUser;
      this.router.navigateByUrl("/users");
    });

  }
}

