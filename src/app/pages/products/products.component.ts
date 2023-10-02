import { Component, inject } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from 'src/app/models/products.models';
//Importa per fer trucades a api, importat en app.module.ts
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  //new for angular standalone, no pertany en cap modul
  standalone: true,
  //products necesita import productcomponents, tambe standalone
  imports: [ProductComponent, NgOptimizedImage, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  //fica  el OBJ HTTPClient en la variable http
  http = inject(HttpClient);

  //crea una llista de productes buida
  products: Product[] = [];

  //Com un useEffect 
  ngOnInit() {
    // fa un fetch de la api, saben que tindra la estructura de [Product,Product] id, title,etc
    this.http.get<Product[]>("https://api.escuelajs.co/api/v1/products")
      .subscribe((data) => {
        this.products = data;
      });

  }
}
