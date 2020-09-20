import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private name : string;
  private active : boolean;

  constructor(private userService : UserService) { }


  ngOnInit(): void {
  }

  createNewUser(){
    console.log("new user:" + name + this.active)
  }

}
