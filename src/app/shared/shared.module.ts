import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';



@NgModule({
  declarations: [
    MainCarouselComponent,
    PortfolioListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
