import { Component, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { RestService } from '@app/services/rest.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements AfterViewInit {
  categories:any;
  allPackages:any;
  allProducts:any;
  products:any;
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
    public yeoman:Yeoman,
    public restService:RestService
  ) 
  {
    this.loadCategories();
    this.getAllPackages();
    this.getAllProducts();
   }
   loadCategories(){
    this.restService.getAllCategory().subscribe(response=>{
      this.categories=response;
    });
  }
  getAllPackages(){
    this.restService.getAllPackages().subscribe(response=>{
      this.allPackages=response;
    });
  }
  getAllProducts(){
    this.restService.getAllProducts().subscribe(response=>{
      this.allProducts=response;
    });
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngAfterViewInit(): void {
  }

}
