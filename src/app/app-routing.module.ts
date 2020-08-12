import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AuthGuard} from './user/auth.guard';
import {canActivate} from '@angular/fire/auth-guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // look! lazy-loadin' feature hacktivated! must learn more: https://webpack.js.org/guides/code-splitting/
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban-board/kanban-board.module').then(m => m.KanbanBoardModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
