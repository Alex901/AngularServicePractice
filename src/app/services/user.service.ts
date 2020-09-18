import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model'
import { CounterService } from './counter.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users : User[] = [new User("Adamn", false), new User("Bertil", false),
  new User("Christian", true), new User("David", true)];
  statusChanged = new EventEmitter<string>();

  constructor(private counter : CounterService) { }

  setActive(index : number){
    this.users[index].active == true;
  }

  setInactive(index : number){
    this.users[index].active == false;
  }

  createNewuser(name : string, status : boolean){
    this.users.push(new User(name, status));
  }

  changeStatus(name : string){
    this.users.forEach(u => {
      if(u.name === name){
        if(u.active){
          u.active = false;
          this.counter.incraseToInactive();
          this.statusChanged.emit("a status has changed");
        } else {
          u.active = true;
          this.counter.incraseToActive();
          this.statusChanged.emit("a status has changed");
        }
      }
    })
  }

}
