import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';



@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
  ]
})
export class DialogModule { }
