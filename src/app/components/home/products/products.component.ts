import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts:any;
  constructor(
    public yeoman: Yeoman,
    public restService: RestService
  ) {
    this.getAllProducts();
   }
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  getAllProducts(){
    this.restService.getAllProducts().subscribe(response=>{
      this.allProducts=response;
    });
  }
  viewProducts(products:any){
    this.yeoman.previewProducts=products;
    this.setRoute('detail-products');
  }
  ngOnInit(): void {
      window.scrollTo(0, 0);
  }

}
