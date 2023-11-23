import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allAlbums:any;
  album:any;
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    private modalService: NgbModal
  ) { 
    this.getAllAlbums();
  }
  getAllAlbums(){
    this.restService.getAllAlbums().subscribe(response => {
      this.allAlbums = response;
      console.log('Álbumes cargados:', this.allAlbums);
    });
  }
/*   open(imageSrc: string) {
    const modalRef = this.modalService.open(NgbModalContent);
    modalRef.componentInstance.imageSrc = imageSrc;
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
