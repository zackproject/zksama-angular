import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Quan necesites alguna cosa nova, l'importes   aqui
//Per fer peticions necesitem a HTTPClientModule
import { HttpClientModule } from '@angular/common/http'
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    //Si tenen 'standalone' no fa falta que estiguin aqui
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importa el nou module per a tots els moduls
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
