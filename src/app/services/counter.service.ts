import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterCreated : number = 0;
  public counterRemoved : number = 0;
  public counterToInactive : number = 0;
  public counterToActive : number = 0;

  activeCountUpdated = new EventEmitter<number>();
  inactiveCountUpdated = new EventEmitter<number>();
  removeCountUpdated = new EventEmitter<number>();
  createdCountUpdater = new EventEmitter<number>();

  constructor() {

   }

   getToActive(){
     return this.counterToActive;
   }

  incraseCreated(){
    this.counterCreated += 1;
  }

  incraseRemoved(){
    this.counterRemoved++;
  }

  incraseToActive(){
    this.counterToActive++;
    this.activeCountUpdated.emit(this.counterToActive);
  }

  incraseToInactive(){
    this.counterToInactive++;
    this.inactiveCountUpdated.emit(this.counterToInactive);
  }
}
