import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoMatchComponent } from './no-match.component';

const routes: Routes = [
  {
    path: '',
    component: NoMatchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoMatchRoutingModule { }
