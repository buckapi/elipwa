import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { RestService } from '@app/services/rest.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewInit {
products:any;
categories:any;
category:any;
allProducts:any;
allPackages:any;
//showCategoryDropdown: boolean = false;
//selectedCategory: any=[];
config2: SwiperOptions = {
  a11y: { enabled: true },
  direction: 'horizontal',
  slidesPerView: 2,
  keyboard: true,
  mousewheel: false,
  scrollbar: false,
  pagination: true,
  spaceBetween: 3,
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
    public restService:RestService,
    public yeoman:Yeoman
  ) 
   
  { 
   this.loadCategories();
   this.getAllPackages();
}

/* setCategory(category: any) {
  let id = category.idCategory;
  // console.log("category recibida: "+id)
  for (let i = 0; i < this.categories.length; i++) {
    if (this.categories[i].idCategory === id) {
      this.yeoman.categorySelected = this.categories[i].idCategory;
      console.log("id Category: "+this.yeoman.categorySelected);
      this.yeoman.virtualRoute = "shop";
      // this.showCategoryDropdown = false;
      break; // Terminamos el bucle ya que hemos encontrado el objeto
    }
  }
} */
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  view(id:any){
    this.yeoman.preview=this.yeoman.products[id];
    this.setRoute('detail');
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
viewPackages(packages:any){
  this.yeoman.previewPackages=packages;
  this.setRoute('detail');
}
ngOnInit(): void {
  window.scrollTo(0, 0);
}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
 

}