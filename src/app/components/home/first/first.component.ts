import { Component, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { RestService } from '@app/services/rest.service';
import { Router } from '@angular/router';
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
  config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      }
    }
  };
  constructor(
    public yeoman:Yeoman,
    public restService:RestService,
    public router: Router
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
  view(category:any){
    this.yeoman.previewCategory=category;
    this.setRoute('detail');
  }
  viewPackages(packages:any){
    this.yeoman.previewPackages=packages;
    this.setRoute('detail');
  }
  viewProducts(products:any){
    this.yeoman.previewProducts=products;
    this.setRoute('detail-products');
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

}
