import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {BoardService} from '../../kanban-board/board.service';

@Component({
  selector: 'app-task-dialog',
  template: `
    <h1 mat-dialog-title>Task</h1>
    <div mat-dialog-content class="content">
      <mat-form-field>
        <textarea
          placeholder="Task description"
          matInput
          [(ngModel)]="data.task.description"
        ></textarea>
      </mat-form-field>
      <br/>
      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.task.lable"
      >
        <mat-button-toggle *ngFor="let opt of labelOptions" [value]="opt">
          <mat-icon [ngClass]="opt">{{
            opt === 'gray' ? 'check-circle' : 'lens'
            }}</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data" cdkFocusInitial>
          {{data.isNew ? 'Add Task' : 'Edit Task'}}
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class TaskDialogComponent {

  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleTaskDelete() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }
}
