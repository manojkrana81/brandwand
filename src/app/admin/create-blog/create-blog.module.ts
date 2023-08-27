import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ckeditor4-angular';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { CreateBlogRoutingModule } from './create-blog-routing.module';
import { CreateBlogComponent } from './create-blog.component';
import { FormsModule } from '@angular/forms';
import { UploadedMediaComponent } from '../uploaded-media/uploaded-media.component';
import { UploadMediaComponent } from '../upload-media/upload-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreateBlogComponent,
    UploadedMediaComponent,
    UploadMediaComponent
  ],
  imports: [
    CommonModule,
    CreateBlogRoutingModule,
    CKEditorModule,
    FormsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class CreateBlogModule { }
