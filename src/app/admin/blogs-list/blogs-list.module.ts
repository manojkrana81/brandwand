import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { BlogsListRoutingModule } from './blogs-list-routing.module';
import { BlogsListComponent } from './blogs-list.component';


@NgModule({
  declarations: [
    BlogsListComponent
  ],
  imports: [
    CommonModule,
    BlogsListRoutingModule,
    MatSnackBarModule
  ]
})
export class BlogsListModule { }
