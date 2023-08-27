import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        loadChildren: ()=> import('../home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'preview-blog/:id',
        loadChildren: ()=> import('../preview-blog/preview-blog.module').then(m=>m.PreviewBlogModule)
      },
      {
        path: 'blogs',
        loadChildren: ()=> import('../blogs/blogs.module').then(m=>m.BlogsModule)
      },
      {
        path: 'blog/:id/:url',
        loadChildren: ()=> import('../blog/blog.module').then(m=>m.BlogModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
