import { Component, OnInit } from '@angular/core';
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
export class DetailAlbumComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  allAlbums:any;
  constructor(
    public yeoman:Yeoman,
    public restService: RestService
  ) { }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;

  window.scrollTo(0, 0);
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
  ngOnInit(): void {
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
