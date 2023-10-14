import { Component } from '@angular/core';
import { DialogModalRef } from './models/dialog-modal-ref.model';
import { DialogConfig } from './models/dialog-config.model';

@Component({
  selector: 'cmp-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  protected config: DialogConfig;

  constructor(private ref: DialogModalRef) {
    this.config = this.ref.config;
  }

  close() {
    this.ref.close();
  }
}
