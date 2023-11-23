import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
  data = {
         name: '',
        email:'',
        phone:'',
        makeup:'',
        ref: '',
        idCategory: '',
        message:''
      };
      public showForm = false;
  constructor(
    public yeoman: Yeoman,
    public restService: RestService,
    
  ) {

   }
   setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
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
    scrollToForm(): void {
      this.showForm = true; // Hace visible el formulario
    
      setTimeout(() => {
        const element = document.getElementById('applicationForm');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Un pequeño retraso para asegurar que el formulario sea visible
    }
    openWhatsApp() {
      window.open('https://wa.me/14108555095?text=Hola%20Eli-Fotografía,%20quisiera%20pedir%20una%20cita%20de%20fotografía.');
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
