import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewBlogRoutingModule } from './preview-blog-routing.module';
import { PreviewBlogComponent } from './preview-blog.component';


@NgModule({
  declarations: [
    PreviewBlogComponent
  ],
  imports: [
    CommonModule,
    PreviewBlogRoutingModule
  ]
})
export class PreviewBlogModule { }
