import { Component, inject } from '@angular/core';
//Importa per fer trucades a api, importat en app.module.ts
import { HttpClient } from '@angular/common/http';
//Import la interface OBJ product
import { Product } from './models/products.models';
// per a loadinglazy de imatges
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// Aixo son les props del projecte, es poden cridar en el 'html'
export class AppComponent {
  title = 'zksama-app';
  //crea una llista de productes buida
  products: Product[] = [];
  //fica  el OBJ HTTPClient en la variable http
  http = inject(HttpClient);

  changeTitle() {
    this.title = "canviat";
  }

  //Com un useEffect 
  ngOnInit() {
    // fa un fetch de la api, saben que tindra la estructura de [Product,Product] id, title,etc
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products")
      .subscribe((data) => {
        this.products = data;
      });

  }
}
