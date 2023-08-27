import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidenavComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CKEditorModule,
  ]
})
export class AdminModule { }
