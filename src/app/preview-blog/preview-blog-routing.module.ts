import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewBlogComponent } from './preview-blog.component';

const routes: Routes = [
  {
    path: '',
    component: PreviewBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewBlogRoutingModule { }
