import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-detail-packages',
  templateUrl: './detail-packages.component.html',
  styleUrls: ['./detail-packages.component.css']
})
export class DetailPackagesComponent implements OnInit {
  allPackages:any;
  constructor(
    public yeoman: Yeoman,
    public restService: RestService
  ) {
    this.getAllPackages();
   }
  getAllPackages(){
    this.restService.getAllPackages().subscribe(response=>{
      this.allPackages=response;
    });
  }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  viewPackages(packages:any){
    this.yeoman.previewPackages=packages;
    this.setRoute('detail');
  }
  ngOnInit(): void {
  }

}
