import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Quan necesites alguna cosa nova, l'importes   aqui
//Per fer peticions necesitem a HTTPClientModule
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importa el nou module
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
