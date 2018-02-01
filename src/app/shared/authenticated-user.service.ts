import {Injectable} from "@angular/core";
import {User} from "../users/model/user";

@Injectable()
export class AuthenticatedUserService {

  private authUser: User;

  constructor() {
  }

  set authenticatedUser(authenticatedUser: User) {
    this.authUser = authenticatedUser;
  }

  get authenticatedUser() {
    return this.authUser;
  }

}
