import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadedMediaComponent } from './uploaded-media.component';

const routes: Routes = [
  {
    path: '',
    component: UploadedMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadedMediaRoutingModule { }
