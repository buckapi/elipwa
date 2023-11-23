import { Component, OnInit ,ElementRef,ViewChild,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarSupportedContent', { static: true }) navbarSupportedContent!: ElementRef;
  menuExpandido: boolean = false;
  constructor(
    public yeoman:Yeoman,
    public router:Router,

  private renderer: Renderer2 
  ) {}
  setRoute(par: any) {
    this.menuExpandido = !this.menuExpandido;
    let parametro = par;
    this.yeoman.virtualRoute = parametro;

    // this.renderer.removeClass(this.navbarSupportedContent.nativeElement, 'show');
    window.scrollTo(0, 0);
   
   
  }
  toggleMenu() {
    this.menuExpandido = !this.menuExpandido;
  }

  ngOnInit(): void {
  }

}
