import { Component, OnInit, OnChanges } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private counterService: CounterService) { }

  usersCreated: number = 0;
  usersRemoved: number = 0;
  usersActivated: number = 0;
  usersInactivated: number = 0;


  ngOnInit(): void {
    console.log(this.usersCreated);
    this.counterService.activeCountUpdated.subscribe(
      (newCount: number) => {
        this.usersActivated = newCount;
      }
    );
     this.counterService.inactiveCountUpdated.subscribe(
       (newCount : number) => {
         this.usersInactivated = newCount;
       }
     );

     this.counterService.createdCountUpdater.subscribe(
       (newCount : number) => {
         this.usersCreated = newCount;
       }
     );

     this.counterService.removeCountUpdated.subscribe(
      (newCount : number) => {
        this.usersRemoved = newCount;
      }
    );
  }



}
