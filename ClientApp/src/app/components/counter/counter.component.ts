import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit, OnDestroy {
  public currentCount = 0;
  private subscription!: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.subscription = this.counterService.counter$.subscribe(count => {
      this.currentCount = count;
    });
  }

  public incrementCounter() {
    this.counterService.incrementCounter();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
