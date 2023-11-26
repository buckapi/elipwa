import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Filter
 { idCategorySelected:string="";
  package: { id: string; name: any  } = { id: "c0", name: null};
  packageFiltered:boolean=false;
}