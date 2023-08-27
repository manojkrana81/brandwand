import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FloatingContactUsComponent } from '../floating-contact-us/floating-contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    RightSidebarComponent,
    FooterComponent,
    FloatingContactUsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class LayoutModule { }
