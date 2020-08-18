import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {ShellComponent} from './shell/shell.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

const components = [ShellComponent];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
  LayoutModule
];

@NgModule({
  declarations: [...components, DeleteButtonComponent],
  imports: [...modules],
    exports: [
        ...modules,
        ...components,
        DeleteButtonComponent
    ]
})
export class SharedModule {
}
