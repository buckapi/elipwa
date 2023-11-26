import { Component, AfterViewInit ,OnInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { HttpClient } from '@angular/common/http';
import { RestService } from '@app/services/rest.service';
import { SwiperOptions } from 'swiper';
import { LightgalleryModule } from 'lightgallery/angular/13';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
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
    public restService:RestService,
    public script:ScriptService,
    public yeoman:Yeoman
  ){
    this.script.load(
      'jquery',
      'bootstrap',
      'imagesloaded',
      'isotope',
      'modernizr',
      'waypoints',
      'owl-carousel',
      'slick',
      'magnific-popup',
      'masonry',
      'youtubepopup',
      'script'
          )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error));  
                  
  
         
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;

  window.scrollTo(0, 0);
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  } 
  ngOnInit(): void {
  //   setTimeout(() => {
  //   window.scrollTo(0, 0);
  // }, 0);
  }
  

}
