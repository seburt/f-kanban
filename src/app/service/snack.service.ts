import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snack: MatSnackBar, private router: Router) {}

  authError() {
    this.snack.open('You must be authenticated!', 'OK', {
      duration: 5000
    });

    return this.snack._openedSnackBarRef
      .onAction()
      .pipe(
        tap(_ => this.router.navigate(['/login']))
      )
      .subscribe();
  }
}
