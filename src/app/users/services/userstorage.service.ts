import { Injectable, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { BackendService } from '../../shared/backend.service';

@Injectable()
export class UserStorageService implements OnInit {
    
    storedUsers: User[];
    constructor(private backEndService: BackendService) {
    }

    ngOnInit(): void {
        this.backEndService.get("users").subscribe((users) => {
            this.storedUsers = users;
        });
    }
    
    get users(): User[]{
        return this.storedUsers;
    }
}