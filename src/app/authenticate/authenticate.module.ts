import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenticateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticateRoutingModule,
    MatSnackBarModule
  ]
})
export class AuthenticateModule { }
