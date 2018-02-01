import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {BackendService} from "../../shared/backend.service";

@Injectable()
export class UserService {

  constructor(private backendService: BackendService) {
  }

  getAllUsers() {
    return this.backendService.get("users");
  }

  updateUser(selectedUser: User) {
    return this.backendService.put("users/" + selectedUser.userId, selectedUser);
  }

  createNewUser(user: User) {
    console.log(user.eMail);
    return this.backendService.post("users", user);
  }

  deleteUser(user: User) {
    console.log(user.userId);
    return this.backendService.delete("users/" + user.userId);
  }
}
