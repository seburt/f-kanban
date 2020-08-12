import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Subscription} from 'rxjs';
import {BoardModel} from '../board.model';
import {BoardService} from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit, OnDestroy {
  boards: BoardModel[];
  sub: Subscription;

  constructor(public boardService: BoardService) {
  }

  ngOnInit(): void {

    this.sub = this.boardService
      .getBoards()
      // .getUserBoards()
      .subscribe(boards => {
        this.boards = boards;
        console.log('boards: ' + boards);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }
}
