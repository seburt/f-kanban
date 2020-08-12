import {Inject, Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {BoardModel, TaskModel} from './board.model';
import {map, switchMap} from 'rxjs/operators';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  boardsCollectionPath = 'boards';

  constructor(private  afAuth: AngularFireAuth,
              private db: AngularFirestore) {
  }

  async createBoard(data: BoardModel) {
    const user = await this.afAuth.currentUser;
    return this.db.collection(this.boardsCollectionPath).add({
      ...data,
      uid: user.uid,
      tasks: [{description: 'Hello!', label: 'green'}]
    });
  }

  deleteBoard(boardId: string) {
    return this.db
      .collection(this.boardsCollectionPath)
      .doc(boardId)
      .delete();
  }

  updateTasks(boardId: string, tasks: TaskModel[]) {
    return this.db
      .collection(this.boardsCollectionPath)
      .doc(boardId)
      .update({tasks});
  }

  removeTask(boardId: string, task: TaskModel) {
    return this.db
      .collection(this.boardsCollectionPath)
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task)
      });
  }

  getBoards() {
    return this.db
      .collection<BoardModel>(this.boardsCollectionPath)
      .valueChanges({idField: 'id'});
  }

  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<BoardModel>(this.boardsCollectionPath, ref =>
              ref
                .where('uid', '==', user.uid)
                .orderBy('priority'))
            .valueChanges({idField: 'id'});
        } else {
          return [];
        }
      })
    );
  }

  sortBoards(boards: BoardModel[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection(this.boardsCollectionPath).doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, {priority: idx}));
    batch.commit();
  }
}
