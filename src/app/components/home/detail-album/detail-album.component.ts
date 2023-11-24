import { Component, OnInit,AfterViewInit } from '@angular/core';
import { previewAlbum } from '@app/services/previewAlbum.service';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit,AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  allAlbums:any;
  albums:any;
  data = {
    images: [
      {}
    ],
    name: '',
    description:'',
    ref: '',
     idCategory: '',
  };
  constructor(
    public yeoman:Yeoman,
    public restService: RestService,
    public previewAlbum:previewAlbum
  ) { 
this.getAllAlbums()
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;

  window.scrollTo(0, 0);
  }
  getAllAlbums() {
    console.log("Peticiones de álbumes");
    this.restService.getAllAlbums().subscribe(response => {
      this.allAlbums = response;
      console.log("Respuesta", response);
  this.allAlbums=response;
  let size= this.getAllAlbums.length;
      if (response != undefined && this.previewAlbum.i < size) {
        // Asegúrate de que 'i' está definido y es un índice válido
        const albumImages = this.allAlbums[this.previewAlbum.i].images;
        for (let i = 0; i < albumImages.length; i++) {
          console.log("Imagen", albumImages[i]);
          this.galleryImages.push({
            small: albumImages[i],
            medium: albumImages[i],
            big: albumImages[i]
          });
        }
      }
    });
  }
  
  ngAfterViewInit(): void {
    // console.log("holaaa",JSON.stringify(this.previewAlbum))
this.getAllAlbums()
   
  }
  ngOnInit(): void {
    this.getAllAlbums()
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
    // for(let i = 0; i < this.previewAlbum.album.length; i++ ){
    //   console.log(this.previewAlbum.album[i])
    //   this.galleryImages.push({
    //     small: '' + this.previewAlbum.album[i],
    //     medium: '' + this.previewAlbum.album[i],
    //     big: '' + this.previewAlbum.album[i]
    //   })
    // }
    
  }

}
