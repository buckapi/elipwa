import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FirstComponent } from './first/first.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { DetailPackagesComponent } from './detail-packages/detail-packages.component';
import { PackagesComponent } from './packages/packages.component';
@NgModule({
  declarations: [
    HomeComponent,
    FirstComponent,
    ContactComponent,
    ShopComponent,
    DetailComponent,
    AboutComponent,
    CategoriesComponent,
    ProductsComponent,
    DetailProductsComponent,
    DetailPackagesComponent,
    PackagesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
