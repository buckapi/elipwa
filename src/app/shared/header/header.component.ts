import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public yeoman:Yeoman,
    public router:Router
  ) {}
setRoute(par:any){
  let parametro=par;
this.yeoman.virtualRoute=parametro;
}
  ngOnInit(): void {
  }

}
