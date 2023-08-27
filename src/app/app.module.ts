import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the library
import { CarouselModule } from 'ngx-owl-carousel-o';
// Needs to import the BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
