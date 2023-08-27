import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { UploadedMediaRoutingModule } from './uploaded-media-routing.module';
// import { UploadedMediaComponent } from './uploaded-media.component';


@NgModule({
  declarations: [
    // UploadedMediaComponent
  ],
  imports: [
    CommonModule,
    UploadedMediaRoutingModule,
    MatSnackBarModule
  ]
})
export class UploadedMediaModule { }
