import { Component } from '@angular/core';
import { DialogRef } from 'src/app/shared/components/dialog/models/dialog-ref.model';

@Component({
  selector: 'cmp-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  public message: string;

  constructor(private ref: DialogRef<MyComponent>) {
  }

  close() {
    this.ref.close();
  }
}
