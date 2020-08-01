import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AuthGuard} from './user/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  // look! lazy-loadin' feature hacktivated! must learn more: https://webpack.js.org/guides/code-splitting/
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
