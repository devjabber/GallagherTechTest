import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';

@Component({
  selector: 'app-jumbotron-counter',
  templateUrl: './jumbotron-counter.component.html'
})
export class JumbotronCounterComponent {
  constructor(public counterService: CounterService) {}
}
