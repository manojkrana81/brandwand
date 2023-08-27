import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBlogRoutingModule } from './view-blog-routing.module';
import { ViewBlogComponent } from './view-blog.component';


@NgModule({
  declarations: [
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    ViewBlogRoutingModule
  ]
})
export class ViewBlogModule { }
