import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-board-dialog',
  template: `
    <h1 mat-dialog-title>Board</h1>
    <div mat-dialog-content>
      <p>What shall we call this board?</p>
      <mat-form-field>
        <input type="text" placeholder="title" matInput [(ngModel)]="data.title">
      </mat-form-field>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Create</button>
      </div>
    </div>
  `,
  styles: []
})
export class BoardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
