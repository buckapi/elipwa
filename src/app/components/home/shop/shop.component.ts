import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { RestService } from '@app/services/rest.service';

import { Category } from '@app/interfaces/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewInit {
products:any=[];
categories:any;
category:any;
//showCategoryDropdown: boolean = false;
//selectedCategory: any=[];
  constructor(
    public restService:RestService,
    public yeoman:Yeoman
  ) 
   
  { 
   this.loadCategories();

}

setCategory(category: any) {
  let id = category.idCategory;
  // console.log("category recibida: "+id)
  for (let i = 0; i < this.categories.length; i++) {
    if (this.categories[i].idCategory === id) {
      this.yeoman.categorySelected = this.categories[i].idCategory;
      console.log("id Category: "+this.yeoman.categorySelected);
      this.yeoman.virtualRoute = "shop";
      // this.showCategoryDropdown = false;
      break; // Terminamos el bucle ya que hemos encontrado el objeto
    }
  }
}
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  view(id:any){
    this.yeoman.preview=this.yeoman.products[id];
  //  let preview=this.yeoman.products[id];
    // console.log("id: "+id+"preview name: ");
    // console.log(JSON.stringify(preview));
    this.setRoute('detail');
  }

// getProducts(){
//   this.restService.getAllProducts().subscribe(response=>{
//     this.products=[];
//     this.products=response;
//     this.yeoman.products=this.products;
//   });

// }
loadCategories(){
  this.restService.getAllCategory().subscribe(response=>{
    this.categories=response;
  });
}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

}