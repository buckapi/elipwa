import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  allPackages:any;
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    public router: Router
  ) {  this.getAllPackages();
  }
 getAllPackages(){
   this.restService.getAllPackages().subscribe(response=>{
     this.allPackages=response;
     this.yeoman.allPackages=response;
   });
 }
 setRoute(par:any){
   let parametro=par;
 this.yeoman.virtualRoute=parametro;

 window.scrollTo(0, 0);
 }
 viewPackages(packages:any){

  this.yeoman.previewPackages=null;
   this.yeoman.previewPackages=packages;
   this.setRoute('detail-packages');
 }
 ngAfterViewInit(): void {
  window.scrollTo(0, 0);
}
ngOnInit(): void {
  setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);
}

}
