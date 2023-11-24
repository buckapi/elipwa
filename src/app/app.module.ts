import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HdrComponent } from './shared/hdr/hdr.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { previewAlbum } from './services/previewAlbum.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HdrComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxGalleryModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [previewAlbum],
  bootstrap: [AppComponent]
})
export class AppModule { }
