import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
//Quan necesites alguna cosa nova, l'importes   aqui
//Per fer peticions necesitem a HTTPClientModule
import {HttpClientModule} from '@angular/common/http'
import { NgOptimizedImage } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importa el nou module
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
