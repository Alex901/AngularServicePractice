import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  public activeUsers : User[] = this.userService.users;

  constructor(private userService : UserService,) {

  }


  ngOnInit(): void {
    //this.findActiveUsers();
  }

  findActiveUsers(){
    this.userService.users.forEach(u => {
      if(u.active){
        this.activeUsers.push(u);
      }
    })
  }

  setToInactive(name : string){
      this.userService.changeStatus(name);
  }
}
