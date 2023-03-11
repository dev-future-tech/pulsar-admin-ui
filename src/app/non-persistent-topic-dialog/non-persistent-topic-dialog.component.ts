import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-non-persistent-topic-dialog',
  templateUrl: './non-persistent-topic-dialog.component.html',
  styleUrls: ['./non-persistent-topic-dialog.component.css']
})
export class NonPersistentTopicDialogComponent {
  withSchema = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, timeout: number }) {}
  
  showEditor(checked: boolean) : void {

  }

}
