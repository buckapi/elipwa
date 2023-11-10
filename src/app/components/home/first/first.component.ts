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
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
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
