import {Injectable} from "@angular/core";
import {BackendService} from "../shared/backend.service";
import {AuthenticatedUserService} from "../shared/authenticated-user.service";
import {User} from "../users/model/user";
import {Login} from "./login.model";

@Injectable()
export class LoginService {

  constructor(private backendService: BackendService) {
  }

  authenticate(login: Login) {
    return this.backendService.post("users/login", login);
  }

}
