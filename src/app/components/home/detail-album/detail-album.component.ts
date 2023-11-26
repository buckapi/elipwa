import { Component, OnInit, AfterViewInit } from '@angular/core';
import { previewAlbum } from '@app/services/previewAlbum.service';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit, AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  allAlbums: any;
  albums: any;
  data = {
    images: [
      {}
    ],
    name: '',
    description: '',
    ref: '',
    idCategory: '',
  };
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    public previewAlbum: previewAlbum
  ) {
    
    // this.getAllAlbums()
    
  }
  setRoute(par: any) {
    let parametro = par;
    this.yeoman.virtualRoute = parametro;
    window.scrollTo(0, 0);
  }

  // getAllAlbums() {
  //   console.log("Peticiones de álbumes");
  //   this.restService.getAllAlbums().subscribe(response => {
  //     this.allAlbums = response;
  //     console.log("Respuesta",JSON.stringify(response)+"indice a usar:"+this.previewAlbum.i);
  //     this.allAlbums = response;
  //     let size = this.getAllAlbums.length;
  //     if (response != undefined && this.previewAlbum.i < size) {
  //       const albumImages = this.allAlbums[this.previewAlbum.i].images;
  //       for (let i = 0; i < albumImages.length; i++) {
  //         console.log("Imagen", albumImages[i]);
  //         this.galleryImages.push({
  //           small: albumImages[i],
  //           medium: albumImages[i],
  //           big: albumImages[i]
  //         });
  //       }
  //     }
  //   });
  // }
  
  ngAfterViewInit(): void {
    // this.getAllAlbums()
  }
  ngOnInit(): void {

    // this.getAllAlbums()
    this.galleryOptions = [
      {
        width: '100%', // Usa el 100% del ancho del contenedor
        height: '800px', // Altura automática para mantener la proporción de la imagen
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: 'contain' // Asegúrate de que las imágenes se ajusten sin recortar
      },

      {
        breakpoint: 800,
        width: '100%',
        height: '600px', // Ajustado para una mejor visualización
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10, // Reducido para pantallas más pequeñas
        thumbnailMargin: 10
      },
      {
        breakpoint: 400,
        preview: false,
        height: '600px' // Opcional, ajustar según sea necesario
      }
             
      
    ];
    /* this.galleryOptions = [
      {
        width: '50%',
        height: '400px',
        thumbnailsColumns: 6,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewArrows: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewZoom: true,
        previewZoomStep: 1.5,
        previewZoomMax: 5,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageArrows: false, thumbnailsArrows: true
      },
      {
        previewArrows: true,
        arrowPrevIcon: "fa fa-arrow-circle-o-left", arrowNextIcon: "fa fa-arrow-circle-o-right",
        breakpoint: 800,
        width: '100%',
        height: '300px',
        imageSize: 'contain',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        previewSwipe: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailMargin: 20
      },
      {
        width: '100%',
        breakpoint: 400,
        imagePercent: 100,
        thumbnailsSwipe: true,
        previewZoom: true,
        previewCloseOnEsc: true,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        previewFullscreen: true
      }
    ]; */
    // this.galleryImages = [
    // ];
  }

}
