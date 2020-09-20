import { Component, OnInit, OnChanges } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private counterService : CounterService) { }

  usersCreated : number = this.counterService.counterCreated;
  usersRemoved : number = this.counterService.counterRemoved;
  usersActivated : number = this.counterService.counterToActive;
  usersInactivated : number = this.counterService.counterToInactive;

  ngOnInit(): void {
  }

}
