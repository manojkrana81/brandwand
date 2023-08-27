import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainCarouselComponent } from '../shared/main-carousel/main-carousel.component';
import { PortfolioListComponent } from '../shared/portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    PortfolioListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
