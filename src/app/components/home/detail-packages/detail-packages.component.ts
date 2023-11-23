import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.services';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-detail-packages',
  templateUrl: './detail-packages.component.html',
  styleUrls: ['./detail-packages.component.css']
})

export class DetailPackagesComponent implements OnInit {
  config3: SwiperOptions = {
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
  faqShow=0;
  allAlbums:any;
  allPackages:any;
  faq:any;
  categorySeted:boolean=false;
  category:any;
  data = {
/*     images: [] as string[], */
     name: '',
    email:'',
    phone:'',
    makeup:'',
    ref: '',
    idCategory: '',
    message:''
  };
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    public butler: Butler
  ) {
    this.getAllPackages();
    this.getAllCategories();
    this.getAllAlbums();
   }
  getAllPackages(){
    this.restService.getAllPackages().subscribe(response=>{
      this.allPackages=response;
    });
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  window.scrollTo(0, 0);
  }
 
 getAllCategories(){
      this.restService.getAllCategory().subscribe(response=>{
        this.yeoman.categories=response;
      });
    }
   
  onCategorySelect(category:any) {        
      this.data.idCategory = "c"+category.id;
      console.log(category.id);
    }
    checkVisibility(i:any){
this.faqShow=i;
    }
  setCategory(category:any){
      let index=category;
      console.log("seleccionada: "+this.yeoman.allcategory[index].name);
      this.categorySeted=true;
      if (this.yeoman.categories!==undefined){
      this.data.idCategory=this.yeoman.allcategory[index].id;
      console.log("id: "+JSON.stringify(this.data.idCategory));
      }
    }
    getAllAlbums(){
      this.restService.getAllAlbums().subscribe(response => {
        this.allAlbums = response;
        console.log('Álbumes cargados:', this.allAlbums);
      });
    }
  
  onSubmit(){
    
      this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
      this.restService.saveRequest(this.data).subscribe(response=>{
        console.log(response);
       this.setRoute('packages');
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Solicitud enviada con exito!',
          showConfirmButton: false,
          timer: 1500
        }) 
       
      });
      console.log(this.data);
      
      }
      viewPackages(packages:any){
        this.yeoman.previewPackages=packages;
        this.setRoute('detail-packages');
      }
      
 /*  toggleAccordion(faq) {
    faq.isActive = !faq.isActive;
  } */
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  
  ngOnInit(): void {
    setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  }

}
