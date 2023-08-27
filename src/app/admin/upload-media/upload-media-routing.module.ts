import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadMediaComponent } from './upload-media.component';

const routes: Routes = [
  {
    path: '',
    component: UploadMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadMediaRoutingModule { }
