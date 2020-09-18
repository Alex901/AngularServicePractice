import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  public inactiveUsers : User[] = this.userService.users;
  constructor(private userService : UserService) {

  }


  ngOnInit(): void {
    //this.findInactiveUsers();
  }

  findInactiveUsers(){
    this.userService.users.forEach(u => {
      if(!u.active){
        this.inactiveUsers.push(u);
      }
    })
  }

  setToActive(name : string){
    this.userService.changeStatus(name);
}

}
