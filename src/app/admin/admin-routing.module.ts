import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: ()=> import('./admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule)
      },
      {
        path: 'blogs-list',
        loadChildren: ()=>import('./blogs-list/blogs-list.module').then(m=>m.BlogsListModule),
      },
      {
        path: 'create-blog',
        loadChildren: ()=> import('./create-blog/create-blog.module').then(m=>m.CreateBlogModule)
      },
      {
        path: 'preview-blog/:id',
        loadChildren: ()=> import('./preview-blog/preview-blog.module').then(m=>m.PreviewBlogModule),
      },
      {
        path: 'uploaded-media',
        loadChildren: ()=> import('./uploaded-media/uploaded-media.module').then(m=>m.UploadedMediaModule) 
      },
      {
        path: 'upload-media',
        loadChildren: ()=> import('./upload-media/upload-media.module').then(m=>m.UploadMediaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
