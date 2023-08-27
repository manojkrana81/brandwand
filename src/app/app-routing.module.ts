import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { NoMatchComponent } from './no-match/no-match.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./layout/layout.module').then(m=>m.LayoutModule),
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m=> m.AdminModule),
    canLoad: [AuthGuardService]
  },
  {
    path: 'authenticate',
    loadChildren: ()=> import('./authenticate/authenticate.module').then(m=>m.AuthenticateModule)
  },
  // {
  //   path: '**',
  //   loadChildren: ()=> import('./no-match/no-match.module').then(m=>m.NoMatchModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
