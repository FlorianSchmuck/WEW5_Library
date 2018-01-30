import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { BackendService } from '../../shared/backend.service';
import { UserStorageService } from '../services/userstorage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    selectedUser:User;
    selectedUserId:number;

    constructor(private userstorageService:UserStorageService,
      route:ActivatedRoute) {
      route.params.subscribe(params => {
        console.log(+params['id']);
        this.selectedUserId = +params['id'];
    });
   }

  ngOnInit() {
    console.log(this.selectedUserId);
    let users = this.userstorageService.users;
    this.selectedUser = users.find( (user)=> {
      return user.userId === this.selectedUserId
    });
  }
}
