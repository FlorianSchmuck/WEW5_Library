import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {BackendService} from "../../shared/backend.service";

@Injectable()
export class UserStorageService {

  storedUsers: User[];

  constructor(private backEndService: BackendService) {
    this.backEndService.get("users").subscribe((users) => {
      this.storedUsers = users;
    });
  }

  get users(): User[] {
    return this.storedUsers;
  }
}
