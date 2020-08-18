import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './component/home/home.component';

import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { BoardDialogComponent } from './component/dialogs/board-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { TaskDialogComponent } from './component/dialogs/task-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule,
        MatDialogModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BoardDialogComponent, TaskDialogComponent]
})
export class AppModule {
}
