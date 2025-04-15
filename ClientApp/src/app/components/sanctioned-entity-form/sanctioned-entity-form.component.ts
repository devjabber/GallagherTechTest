import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanctionedEntity } from 'src/app/models/sanctioned-entity';
import { SanctionedEntitiesService } from 'src/app/services/sanctioned-entities.service';


@Component({
  selector: 'app-sanctioned-entity-form',
  templateUrl: './sanctioned-entity-form.component.html'
})
export class SanctionedEntityFormComponent {
  public entityForm: FormGroup;
  @Output() closeDialog = new EventEmitter<void>(); // Emits close event
  @Output() entityAdded = new EventEmitter<SanctionedEntity>(); // Emits added entity

  constructor(
    private fb: FormBuilder,
    private entitiesService: SanctionedEntitiesService
  ) {
    this.entityForm = this.fb.group({
      name: ['', Validators.required],
      domicile: ['', Validators.required],
      accepted: [false, Validators.required]
    });
  }

  submitForm() {
    if (this.entityForm.valid) {
      const newEntity: SanctionedEntity = this.entityForm.value;
      this.entitiesService.addSanctionedEntity(newEntity).subscribe(() => {
        this.entityAdded.emit(newEntity);
        this.closeDialog.emit();
      });
    }
  }
}
