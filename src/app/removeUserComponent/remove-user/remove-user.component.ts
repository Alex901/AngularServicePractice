import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  users : User[] = this.userService.users;
  userToRemove : string;
  constructor(private userService : UserService) { 

  }

  removeUser(){
console.log(this.userToRemove)
  }


  ngOnInit(): void {
 
  }

}
