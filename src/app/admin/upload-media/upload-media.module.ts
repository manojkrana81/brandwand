import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { UploadMediaRoutingModule } from './upload-media-routing.module';
import { UploadMediaComponent } from './upload-media.component';


@NgModule({
  declarations: [
    // UploadMediaComponent
  ],
  imports: [
    CommonModule,
    UploadMediaRoutingModule,
    MatSnackBarModule
  ]
})
export class UploadMediaModule { }
