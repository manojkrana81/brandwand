import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoMatchRoutingModule } from './no-match-routing.module';
import { NoMatchComponent } from './no-match.component';


@NgModule({
  declarations: [
    NoMatchComponent
  ],
  imports: [
    CommonModule,
    NoMatchRoutingModule
  ]
})
export class NoMatchModule { }
