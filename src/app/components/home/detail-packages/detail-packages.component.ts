import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.services';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-detail-packages',
  templateUrl: './detail-packages.component.html',
  styleUrls: ['./detail-packages.component.css']
})

export class DetailPackagesComponent implements OnInit {
  allPackages:any;
  faq:any;
  categorySeted:boolean=false;
  category:any;
  data = {
/*     images: [] as string[], */
     name: '',
    email:'',
    phone:'',
    makeup:'',
    ref: '',
    idCategory: '',
    message:''
  };
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    public butler: Butler
  ) {
    this.getAllPackages();
    this.getAllCategories();
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
 
 getAllCategories(){
      this.restService.getAllCategory().subscribe(response=>{
        this.yeoman.categories=response;
      });
    }
   
  onCategorySelect(category:any) {        
      this.data.idCategory = "c"+category.id;
      console.log(category.id);
    }
    
  setCategory(category:any){
      let index=category;
      console.log("seleccionada: "+this.yeoman.allcategory[index].name);
      this.categorySeted=true;
      if (this.yeoman.categories!==undefined){
      this.data.idCategory=this.yeoman.allcategory[index].id;
      console.log("id: "+JSON.stringify(this.data.idCategory));
      }
    }
  
  onSubmit(){
    
      this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
      this.restService.saveRequest(this.data).subscribe(response=>{
        console.log(response);
       this.setRoute('packages');
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Solicitud enviada con exito!',
          showConfirmButton: false,
          timer: 1500
        }) 
       
      });
      console.log(this.data);
      
      }
      
 /*  toggleAccordion(faq) {
    faq.isActive = !faq.isActive;
  } */
  
  ngOnInit(): void {
  }

}
