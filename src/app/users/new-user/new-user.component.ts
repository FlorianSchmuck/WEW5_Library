import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userToCreate:User;
  

  constructor(private userService: UserService,
              private router :Router) {

   }

  ngOnInit() {
    this.userToCreate = new User();
  }

  createNewUser(){
    console.log(this.userToCreate.email);
    this.userService.createNewUser(this.userToCreate).subscribe((userresponse) => {
      this.userToCreate = userresponse;
      this.router.navigateByUrl("/users");
    });

  }
}
