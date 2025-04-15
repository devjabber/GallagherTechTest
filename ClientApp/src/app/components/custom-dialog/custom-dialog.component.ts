import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent {
  @Input() title = ''; // Modal title
  @Input() isVisible = false; // Controls visibility
  @Output() closeDialog = new EventEmitter<void>(); // Emits when closing

  close() {
    this.closeDialog.emit(); // Notifies parent to close the modal
  }
}
