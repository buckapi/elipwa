import { Component, OnInit ,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterViewInit {
  products:any;
  categories:any;
  allPackages:any;
  element:any;
 /*  previewPackages: boolean = false; */
  previewCategory: any;
  
  constructor(
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman,
    public restService: RestService
  ) { }
 
 
  //   view(id:any){
  //  let preview=this.yeoman.categories[id];
  //   console.log("id: "+id+"preview name: ");
  //   console.log(JSON.stringify(preview));
  //   this.setRoute('');
  // }
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
  viewPreviewPackages(packages:any){
    this.yeoman.previewPackages=packages;
    this.setRoute('detail-packages');
  }
  ngAfterViewInit(): void {
   this.cdr.detectChanges();
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  }
 

}
