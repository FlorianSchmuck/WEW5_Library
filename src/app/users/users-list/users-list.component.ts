import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/backend.service';
import { User } from '../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private backEndService: BackendService) {
    this.users = [];
   }


  ngOnInit() {
    const testUser1 = this.createUser("richard","r.p@pornhub.com","IBims1Password","42",1);
    const testUser2 = this.createUser("flo","f.s@pornhub.com","1234","42",2);
    const testUser3 = this.createUser("bianca","b.t@pornhub.org","IBims1Password","42",3);
    this.users.push(testUser1);
    this.users.push(testUser2);
    this.users.push(testUser3);
  }

  createUser (name:string,eMail:string,pw:string,privatebckey:string,id:number):User{
    let user = new User();
    user.firstName = name;
    user.eMail = eMail;
    user.password = pw;
    user.bitCoinWalletPrivateKey = privatebckey;
    user.userId = id;
    return user;
  }
  showDetailUser(){
    console.log("tests");
  }

}
