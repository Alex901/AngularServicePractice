import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name : string = "Alzner";
  active : boolean = false;

  constructor(private userService : UserService, private counter : CounterService) {

   }


  ngOnInit(): void {
  }

  createNewUser(){
    this.userService.createNewuser(this.name, this.active);
    this.counter.incraseNewusers();
  }

}
