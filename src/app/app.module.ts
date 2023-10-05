import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { CardComponent } from './components/card/card.component';
//Quan necesites alguna cosa nova, l'importes   aqui
//Per fer peticions necesitem a HTTPClientModule
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
