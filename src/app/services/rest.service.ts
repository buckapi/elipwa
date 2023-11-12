import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Yeoman } from "@app/services/yeoman.service";

export interface CustomerInterface {

}
export interface ChatInterface {
id:string
}
export interface MessageInterface {

}
export interface ServiceInterface {

}
export interface OrderInterface {

}
export interface StylistInterface {

}
export interface SpecialtyInterface {

}
export interface TicketInterface {

}
export interface SerialInterface {
	serialT:string,
}
export interface ClientInterface {

}
export interface CarInterface {
}
export interface ProductInterface {
}
export interface PartInterface {
}
export interface CategoryInterface {

}
@Injectable({
  providedIn: 'root'
})
export class RestService {
	messages:any;
	order:any;
	cards:any;
	customerss:any;
	branch:any;
	cierre:any;
	serial:any;
	transactions:any;
	albums:any;
	services:any;
	products:any;
	packages:any;
	categories:any;
	url:any="https://db.buckapi.com:9032";
	members:any;
	private urlAPIEmail = 'https://pcwdfcc885.execute-api.us-east-2.amazonaws.com/api/test';

  constructor(
  	public yeoman:Yeoman, 
 	 private http: HttpClient
  	) {}


	  sendEmail(data: any): Observable<any> {
		return this.http.post(this.urlAPIEmail, data);
	  }


  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});

	saveCustomer(customer :CustomerInterface){
		const url_api=`${this.url}/api/customers`;
		return this.http
		.post<CustomerInterface>(url_api, customer)
		.pipe(map(data => data));
	}
	getMessages(idchat: string){
		const url_api = `${this.url}/api/messages?filter[where][idChat]=${idchat}`;
		this.messages = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}

	getTransationByBranch(branch: string){
		const url_api = `${this.url}/api/transactions?filter[where][idBranch]=${branch}`;
		this.transactions = this.http.get(url_api);
		return ( this.http.get(url_api));		
	}
	//  charge(amount:any, buy_order:any){
	// 	const headers = new HttpHeaders({
	// 		'Content-Type': 'application/json',
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
	// 		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	// 	  });
	//  	return this.http.post('https://www.zofricars.com/tbk/pay.php',{
	// 		amount: amount,
	//  		buy_order: buy_order
	//  	},{headers}).toPromise();

	//  }
	// charge(amount: any, buy_order: any){
	// 	const headers = new HttpHeaders({
	// 		// 'Content-Type': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Access-Control-Allow-Origin': 'https://app.zofricars.com',
	// 		'Access-Control-Allow-Methods': 'GET, POST'
	// 	});
	// 	const url = `https://www.zofricars.com/tbk/integrator_webpay_rest_api.php?amount=${amount}&buy_order=${buy_order}`;
	// 	return this.http.get(url).toPromise();
	// }
	getAllBranchs(){
		const url_api = this.url+'/api/branchs';
		return this.http.get(url_api);
	}
	getAllParts(){
		const url_api =  this.url+'/api/products';
		return this.http.get(url_api);
	}
	search(searchTerm: any): Observable<any> {
		const url_api = this.url + `/api/cars?filter[where][name][regex]=${searchTerm}`;
		return this.http.get(url_api);
	  }
	getAllCars(){
		const url_api =  this.url+'/api/cars';
		return this.http.get(url_api);
	}
    getAllProducts(){
		const url_api =  this.url+'/api/products';
		return this.http.get(url_api);
	}
	
	// getAllCategories(){
	// 	const url_api =  this.url+'/api/cards';
	// 	return this.http.get(url_api);
	// }

	getProduct(id: string){
		const url_api = 	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http.get(url_api);
	}
	
	getAllCategory(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/categories';
		return this.http.get(url_api);
	}
	getAllClient(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/clients';
		return this.http.get(url_api);
	}
	getAllTestimony(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/testimonials';
		return this.http.get(url_api);
	}
	getAllIntegration(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/integrations';
		return this.http.get(url_api);
	}
	getAllRubro(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/rubros';
		return this.http.get(url_api);
	}
	getAllModules(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/modules';
		return this.http.get(url_api);
	}
	getAllServices(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/services';
		return this.http.get(url_api);
	}
	getAllAlbums(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/albums';
		return this.http.get(url_api);
	}
	getAllPackages(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/packages';
		return this.http.get(url_api);
	}

	


	carUpdate(car :CarInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/cars/${id}`;
		return this.http
		.put<CarInterface>(url_api, car)
		.pipe(map(data => data));
	}
	partUpdate(part :PartInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http
		.put<PartInterface>(url_api, part)
		.pipe(map(data => data));
	}
	clientUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/clients/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	testimonyUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/testimonials/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	integrationUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/integrations/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	rubroUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/rubros/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	modulesUpdate(part :ClientInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/modules/${id}`;
		return this.http
		.put<ClientInterface>(url_api, part)
		.pipe(map(data => data));
	}
	servicesUpdate(part :ProductInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/services/${id}`;
		return this.http
		.put<ProductInterface>(url_api, part)
		.pipe(map(data => data));
	}
	albumsUpdate(part :ProductInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/albums/${id}`;
		return this.http
		.put<ProductInterface>(url_api, part)
		.pipe(map(data => data));
	}
	packagesUpdate(part :ProductInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/packages/${id}`;
		return this.http
		.put<ProductInterface>(url_api, part)
		.pipe(map(data => data));
	}
	
	


	
	saveProduct(product :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<ProductInterface>(url_api, product)
		.pipe(map(data => data));
	}
	saveCategory(category :CategoryInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/categories';
		return this.http
		.post<CategoryInterface>(url_api, category)
		.pipe(map(data => data));
	}
	saveClient(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/clients';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveTestimony(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/testimonials';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveRubro(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/rubros';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveIntegration(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/integrations';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveModules(client :ClientInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/modules';
		return this.http
		.post<ClientInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveServices(client :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/services';
		return this.http
		.post<ProductInterface>(url_api, client)
		.pipe(map(data => data));
	}
	saveAlbums(client :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/albums';
		return this.http
		.post<ProductInterface>(url_api, client)
		.pipe(map(data => data));
	}
	savePackages(client :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/packages';
		return this.http
		.post<ProductInterface>(url_api, client)
		.pipe(map(data => data));
	}
	
}
