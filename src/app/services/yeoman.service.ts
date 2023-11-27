import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  isLoaded:Boolean=false;
  _albums:any;
  virtualRoute:string="first";
  categorySelected:string="first";
   previewCategory:any={
    images: [
      []
    ],
    name: "",
    subname: "",
    description1: "",
    description2: "",
    description3: "",
    ref:"",
    
  };
  previewPackages:any={
    images: [
      {}
    ],
    ref: '',
    name: '',
    title: '',
    description: '', 
    placeSessions: [{place:'' }],
    numberPeople: '',
    clothings: [{cloth:'' }],
    numberPhoto: '',
    price:'',
    numberSessions:[{sesion:''}],
    duration:'',
    not:'',
    sesion:'',
    note:[{not:''}],
    includes:[{inclu:''}],
    idCategory:'',
    faqs: [{ p: '', r: '' }]
  };
  previewProducts:any={
  images: [
    {}
  ],
  name: '',
  size:'',
  description:'',
  price:'',
  ref: '',
   idCategory: '',
};
previewAlbums:any={
  images: [
    {}
  ],
  name: '',
  description:'',
  ref: '',
   idCategory: '',
};
  filteredPackages:any=[];
  preview:any={};
  categories:any={};
  allcategory:any=[];
  allCategoriesSize:number=0;
  products:any={};
  package:any={};
  albums:any={};
  allAlbums:any=[];
  allPackages:any=[];
  allProducts:any=[];
  currency:number=1;
  init:number=1;
  end:number=12;
  numProd:number=0;
  subTotalGral:number=0;
  results:number=0;
  bramch:any={};
  deal:any={};
  userActive:any={};
  totalProducts:number=0;
  imagePreviewProduct:string="";
    subTotal:number=0;
  review:boolean=false;
  vector:any={};       
  string:string=""; 
  distance:string="";
  deviceType:string="";
  distance2:number=0;
  duration:number=0;
  biker:boolean=false;
  hidden:boolean=false;
  details:boolean=false;
  editing:boolean=false;
  profile:boolean=true;
  isLogged:boolean=false;
  bikerStatus:boolean=false;
  skip:number=0;
  limit:number=12;
  type:string="Passenger"; 
  placeholder:string="a donde deseas ir?"; 
  any:any[]=[]; 
  number:number=0;
  rides:boolean=false;
  admin:boolean=false;
  name:string=""; 
  idResult:string=""; 
  idApp:string=""; 
  userd:string=""; 
  role:string=""; 
  idBuckapicard:string=""; 
  idCard:string=""; 
  idBranch:string=""; 
  branch:string=""; 
  userId:string=""; 
  userType:string=""; 
  email:string=""; 
  cards:any[]=[]; 
  serialT:number=0;
  galleryImages: any;
  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.buckapi.com:9032",
    GQLUrl: "<origin GQL url>",
  };
  
  
  constructor() { }
}