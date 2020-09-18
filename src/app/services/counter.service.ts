import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counterCreated : number;
  public counterRemoved : number;
  public counterToInactive : number;
  public counterToActice : number;

  constructor() { }

  incraseCreated(){
    this.counterCreated++;
  }

  incraseRemoved(){
    this.counterRemoved++;
  }

  incraseToActive(){
    this.counterToActice++;
  }

  incraseToInactive(){
    this.counterToInactive++;
  }
}
