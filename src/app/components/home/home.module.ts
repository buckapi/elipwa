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
import { CarsComponent } from './cars/cars.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    FirstComponent,
    ContactComponent,
    ShopComponent,
    DetailComponent,
    AboutComponent,
    CategoriesComponent,
    CarsComponent,
    CheckoutComponent
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
