import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cusjo';
  color = 'blue';
  size = 16;
  displayText = 'show-class';
  bold = 'bold';
  important = true;
  italic = false;
  underline = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-info',
  templateUrl: 'dialog-info.html',
})
export class DialogElementsExampleDialog {}
