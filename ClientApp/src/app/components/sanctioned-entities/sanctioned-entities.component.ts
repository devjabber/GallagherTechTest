import { Component, OnDestroy, OnInit } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent implements OnInit, OnDestroy {
  public entities: SanctionedEntity[] = [];  
  private subscription!: Subscription;

  constructor(private entitiesService: SanctionedEntitiesService) {    
  }
  
  ngOnInit() {
    this.subscription = this.entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }  
}
