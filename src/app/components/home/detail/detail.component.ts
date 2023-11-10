import { Component, OnInit ,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements AfterViewInit {
  products:any=[];
  categories:any;
    element:any;
public quantity : number=1; 
public sent : boolean=false; 
public subTotalGral : number=0; 
public preview :any={
  quantity:1,
  image:"",
  subTotal:0,
  product:"",

}; public tixToAdd :any={
  quantity:1,
  image:"",
  subTotal:0,
  product:"",

}; 
public editing:boolean=false
 
  
  constructor(
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman
  ) { }
  public minus(){
  if (this.quantity>1){
    this.quantity=this.quantity-1;
  }
}
public plus(){
  this.quantity=this.quantity+1;
}
public calculate(){
  this.subTotalGral=0;
  let indice = this.yeoman.car.length;
    for (let i = 0; i < indice; i++){
      this.subTotalGral=this.subTotalGral+this.yeoman.car[i].subTotal;
      this.yeoman.subTotalGral=this.subTotalGral;
  
    }
    this.sent=true;
     this.setRoute('cars');
}
  public addToBag(quantity:any){
    //console.log(quantity);
     this.yeoman.numProd=this.yeoman.numProd+1;
       this.tixToAdd.onCar=true;
     if(this.yeoman.numProd>=3){
       this.tixToAdd.onCar=false;
    this.yeoman.hidden=true;
     }
       this.tixToAdd.quantity=quantity;
       this.tixToAdd.name=this.yeoman.preview.name;
       this.tixToAdd.price=this.yeoman.preview.price;
       this.tixToAdd.images=this.yeoman.preview.images;
  //   this.tixToAdd=this.yeoman.preview;
     this.yeoman.subTotal=this.yeoman.subTotal+(quantity*this.yeoman.preview.price);
   // console.log(JSON.stringify(this.tixToAdd));
     this.yeoman.car.push(this.tixToAdd);
   //     $('#modal1').removeClass("is-visible");

 this.preview.product=this.yeoman.preview;
  this.preview.quantity=this.quantity;
  this.preview.image=this.yeoman.imagePreviewProduct;
  this.preview.subTotal=this.quantity*this.preview.product.price;
//  this.yeoman.car.push(this.preview);
  this.calculate();
  this.tixToAdd={};
  this.quantity=1;


    }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
    view(id:any){
   let preview=this.yeoman.products[id];
    console.log("id: "+id+"preview name: ");
    console.log(JSON.stringify(preview));
    this.setRoute('cars');
  }
  add ( product:any) {
  this.yeoman.cart.push(product);
 }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
 

}
