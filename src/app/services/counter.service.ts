import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterCreated : number = 0;
  public counterRemoved : number = 0;
  public counterToInactive : number = 0;
  public counterToActive : number = 0;

  constructor() {
   
   }

  incraseCreated(){
    this.counterCreated += 1;
  }

  incraseRemoved(){
    this.counterRemoved += 1;
  }

  incraseToActive(){
    this.counterToActive += 1;
  }

  incraseToInactive(){
    this.counterToInactive += 1;
  }
}
