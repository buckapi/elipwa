import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { RestService } from '@app/services/rest.service';
import { Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { previewAlbum } from '@app/services/previewAlbum.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('animation', [
      // configuración de tu animación aquí
    ]),
  ]
})
export class PortfolioComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  allAlbums:any;
  album:any;
  constructor(
    public yeoman:Yeoman,
    public restService:RestService,
    public router: Router,
    public previewAlbum: previewAlbum,
  ) { 
    this.getAllAlbums();
  }
  getAllAlbums(){
    this.restService.getAllAlbums().subscribe(response => {
      this.allAlbums = response;
      if(this.allAlbums[0]!=undefined){
        let size = this.allAlbums.length;
        for(let i = 0;i<size;i++ ){
          console.log(this.allAlbums[i])
          this.galleryImages.push({
            small: ''+this.allAlbums[i].images[0],
            medium: ''+this.allAlbums[i].images[0],
            big: ''+this.allAlbums[i].images[0]
          })
        }
      }
    });
  }
 /*  viewAlbums(albums:any){
    this.yeoman.previewAlbums=albums;
    this.setRoute('detail-album');
  } */
  viewAlbums(i:any){
    this.yeoman.galleryImages=[];
    this.galleryImages=[];
    let album=this.allAlbums[i];
    console.log(album)
    if (album != undefined ) {
      for (let i = 0; i < album.images.length; i++) {
        console.log("Imagen", album.images[i]);
        this.galleryImages.push({
          small: album.images[i],
          medium: album.images[i],
          big: album.images[i]
        });
      }
      
      this.yeoman.galleryImages=this.galleryImages;
    }
    this.setRoute('detail-album');
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
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    // this.galleryOptions = [
    //   {
    //     width: '600px',
    //     height: '400px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide
    //   },
    //   // max-width 800
    //   {
    //     breakpoint: 800,
    //     width: '100%',
    //     height: '600px',
    //     imagePercent: 80,
    //     thumbnailsPercent: 20,
    //     thumbnailsMargin: 20,
    //     thumbnailMargin: 20
    //   },
    //   // max-width 400
    //   {
    //     breakpoint: 400,
    //     preview: false
    //   }
    // ];
    
    this.galleryOptions = [
      {
        width: '50%',
        height: '400px',
        thumbnailsColumns: 4,
        previewCloseOnEsc:true,
        previewKeyboardNavigation:true,
        previewArrows:true,
        thumbnailsSwipe: true,
        previewSwipe:true,
        previewZoom:true,
        previewZoomStep:1.5,
        previewZoomMax:5,
        // previewCloseOnClick:true,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrows: false,  thumbnailsArrows: true
      },
      // max-width 800
      {
        previewArrows:true,
        arrowPrevIcon: "fa fa-arrow-circle-o-left", arrowNextIcon: "fa fa-arrow-circle-o-right", 
        breakpoint: 800,
        width: '100%',
        height: '300px',
        imageSize: 'contain',
         imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      previewSwipe:true,
      previewCloseOnEsc:true,
      previewKeyboardNavigation:true,
      thumbnailMargin: 20
        
      },
      // imagePercent: 100,
      //   imageSize: 'contain',
      //   thumbnailsPercent: 20,
      //   imageArrows:true,
      //   thumbnailsMargin: 20,
      //   previewCloseOnEsc:true,
      //   previewCloseOnClick:true,
      //   previewKeyboardNavigation:true,
      //   thumbnailMargin: 20,
      //   previewSwipe:true,


      
      // max-width 400
      {
        width: '100%',
        breakpoint: 400,
        imagePercent: 100,
        thumbnailsSwipe:true,
        previewZoom: true,
        previewCloseOnEsc:true,
        previewCloseOnClick:true,
        previewKeyboardNavigation:true,
        previewFullscreen:true
      }
    ];
    this.galleryImages = [
    ];
  
  }

}
