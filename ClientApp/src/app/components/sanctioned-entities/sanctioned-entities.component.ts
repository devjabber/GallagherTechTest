import { Component, OnDestroy, OnInit } from '@angular/core';
import { SanctionedEntity } from '../../models/sanctioned-entity';
import { SanctionedEntitiesService } from '../../services/sanctioned-entities.service';
import { Subscription } from 'rxjs';
import { SanctionedEntityFormComponent } from '../sanctioned-entity-form/sanctioned-entity-form.component';

@Component({
  selector: 'app-sanctioned-entities',
  templateUrl: './sanctioned-entities.component.html'
})
export class SanctionedEntitiesComponent implements OnInit, OnDestroy {
  public entities: SanctionedEntity[] = [];  
  private subscription!: Subscription;
  public isDialogVisible = false;

  constructor(private entitiesService: SanctionedEntitiesService) {    
  }
  
  ngOnInit() {
    this.loadEntities();
  }

  openDialog() {
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }

  loadEntities() {
    this.entitiesService.getSanctionedEntities().subscribe(entities => {
      this.entities = entities;
    });
  }

  addEntity(entity: SanctionedEntity) {
    this.loadEntities();
    this.closeDialog();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }  
}
