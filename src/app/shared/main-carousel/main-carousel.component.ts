import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit{
  images:any[] = [
    {
      url:'clayplay.jpg',
      title: '',
      description: '',
      link: ''
    }
  ]
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
