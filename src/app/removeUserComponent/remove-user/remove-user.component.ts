import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  @ViewChild('myDropdown') myDropdownList : ElementRef;
  userToRemove : string;
  users : User[] = this.userService.users;

  constructor(private userService : UserService, private counter : CounterService) {

  }

  onRowClick(){
    this.userToRemove = this.myDropdownList.nativeElement.value;
  }

  removeUser(){
     this.userService.deleteUser(this.userToRemove);
  }


  ngOnInit(): void {

  }

}
