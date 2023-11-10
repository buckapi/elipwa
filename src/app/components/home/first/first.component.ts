import { Component, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { CATEGORIES } from '@app/services/categories.services';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements AfterViewInit {
  categories:any;
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  constructor(
    public yeoman:Yeoman
  ) 
  {
    this.categories=CATEGORIES
   }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngAfterViewInit(): void {
  }

}
