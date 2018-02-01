import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UserComponent,UsersListComponent,
    NewUserComponent
],
  providers:[
    UserService
  ]
})
export class UserModule { }