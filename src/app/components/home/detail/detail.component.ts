import { Component, OnInit ,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterViewInit {
  products:any=[];
  categories:any=[];
  element:any;
  previewPackages: boolean = false;
  previewCategory: any;
  
  constructor(
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman
  ) { }
 
 
  //   view(id:any){
  //  let preview=this.yeoman.categories[id];
  //   console.log("id: "+id+"preview name: ");
  //   console.log(JSON.stringify(preview));
  //   this.setRoute('');
  // }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngAfterViewInit(): void {
    // this.cdr.detectChanges();
    window.scrollTo(0, 0);
  }
 

}
