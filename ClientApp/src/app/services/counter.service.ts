import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  public counter$ = this.counterSubject.asObservable();

  constructor() {}

  getCounter(): number {
    return this.counterSubject.value;
  }

  incrementCounter(): void {
    this.counterSubject.next(this.getCounter() + 1); // Directly update BehaviorSubject
  }
}